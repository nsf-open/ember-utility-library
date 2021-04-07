#!/usr/bin/env bash
set -e

# ----------------------------------------
# Ensure we're in the project root by
# first moving to this directory and then
# one out.
# ----------------------------------------
cd $(dirname $0)
cd ..

SCANNER_PATH="/usr/local/sonar-scanner/bin/sonar-scanner"

if command -v "$SCANNER_PATH" &> /dev/null
then
  for i in "$@"
  do
  case $i in
      --login=*) SONAR_LOGIN="${i#*=}"
      shift # past argument
      ;;
      --scanner-path=*) SCANNER_PATH="${i#*=}"
      shift # past argument
      ;;
  esac
  done

  if [ -z "$SONAR_LOGIN" ]
  then
    echo "A Sonar auth token is required"
  else
    export COVERAGE=true

    yarn run each:test
    yarn run each:lint:js -- -- --format json --output-file "./coverage/eslint.json"

    eval "$SCANNER_PATH -Dsonar.login=$SONAR_LOGIN -Dproject.settings=./sonar-scanner.properties"

    yarn run each:cleanup
  fi
fi

