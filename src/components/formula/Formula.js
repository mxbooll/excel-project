import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  toHtml() {
    return "<h1>Formula</h1>";
  }
}
