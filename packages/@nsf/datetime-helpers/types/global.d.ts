// Types for compiled templates
declare module '@nsf/datetime-helpers/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
