import { createReadStream } from "node:fs";
import { createWriteStream } from "node:fs";
import csvtojson from "csv-parser";

createReadStream("./data.csv")
    .pipe(csvtojson())

    .filter(item => item.favorite_os === "macos")
    // .take(1)
    .map(item => JSON.stringify(item) + "\n")
    .pipe(createWriteStream("./macos_users-ex-05.jsonl"))
 