import chalk from "chalk";
export default class Logging {
  public static log = (args: string) => this.info(args);

  public static info = (args: string) =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === "string" ? chalk.blueBright(args) : args
    );

  public static warn = (args: string) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === "string" ? chalk.yellowBright(args) : args
    );

  public static error = (args: string) =>
    console.log(
      chalk.red(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === "string" ? chalk.red(args) : args
    );

  public static route = (args: string) => 
      console.log(
        chalk.cyan(`[${new Date().toLocaleString()}] [ROUTE]`,
        typeof args === "string" ? chalk.cyanBright(args) : args)
      )

  public static not_found = (args: string) => 
      console.log(
        chalk.red(`[${new Date().toLocaleString()}] [Unknow Route]`,
        typeof args === "string" ? chalk.red(args) : args)
      )

  public static mysql_log = (args: string) => 
      console.log(
        chalk.blue(`[${new Date().toLocaleString()}] [MySQL]`,
        typeof args === "string" ? chalk.blue(args) : args)
      )
}
