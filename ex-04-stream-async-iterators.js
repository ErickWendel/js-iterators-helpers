import { createReadStream } from "node:fs";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import csvtojson from "csv-parser";


await pipeline(
    // readable,
    createReadStream("./data.csv"),
    csvtojson(),
    async function* (source) {

        for await (const item of source) {
            if (item.favorite_os !== "macos") continue;
            yield JSON.stringify(item) + "\n";

        }
    },

    createWriteStream("./macos_users-ex-04.jsonl"),
    // async function* (source) {
    //     const finalFile = createWriteStream("./macos_users-ex-04.jsonl");

    //     for await (const item of source) {
    //         finalFile.write(item);
    //     }
    // },
)
