import { render } from 'ejs';
import { DSPDFTemplateOptions } from './dataStructures/DSPDFTemplateOptions';

export abstract class AbstractPDFTemplate<TPDFTemplatePayload> {
  protected abstract _template: string;

  protected abstract _options: DSPDFTemplateOptions;

  protected _variables: TPDFTemplatePayload;

  public constructor(variables: TPDFTemplatePayload) {
    this._variables = variables;
  }

  public getHTML(): string {
    return render(this._template, this._variables);
  }

  public getOptions(): DSPDFTemplateOptions {
    return this._options;
  }
}
