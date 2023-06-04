import { boot } from "quasar/wrappers";
import stores from "src/stores";

export default boot(({ app }) => {
  const pinia = stores();
  app.use(pinia);
});
