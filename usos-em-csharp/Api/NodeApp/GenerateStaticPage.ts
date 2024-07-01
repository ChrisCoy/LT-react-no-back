import { renderToString } from "react-dom/server";
import { CustomStaticComponent } from "./src/components/custom-static-component";

module.exports = function (callback:any, message: string) {
  const html = renderToString(CustomStaticComponent({message: message}));
  callback(/* error */ null, html);
};