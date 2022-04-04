import Logger from "js-logger";
import { perUser, perUserMonthsTotal, perUserTotal } from "./utils";

export const App = (transactionsList) => {
  Logger.info("App::ctor", transactionsList);

  Logger.info("jay", perUser("jay", transactionsList));
  Logger.info("jay", perUserTotal("jay", transactionsList));
  Logger.info("jay", perUserMonthsTotal("jay", transactionsList));

  Logger.info("dianne", perUser("dianne", transactionsList));
  Logger.info("dianne", perUserTotal("dianne", transactionsList));
  Logger.info("dianne", perUserMonthsTotal("dianne", transactionsList));
};
