import { createReadStream } from "node:fs";
import { createWriteStream } from "node:fs";
import { Transform, Writable, Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import csvtojson from "csv-parser";

const finalFile = createWriteStream("./macos_users-ex-03.jsonl");
// const readable = new Readable({
//     read(size) {
//         const data = [
//             "name,favorite_os",
//             "ErickWendel,macos",
//             "Fabio Akita,archlinux",
//             "Ana Neri,macos",
//             "Xuxa da Silva,windows",
//         ].map(line => this.push(line + "\n"));


//         this.push(null);
//     }
// })
await pipeline(
    // readable,
    createReadStream("./data.csv"),
    csvtojson(),
    new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
            if (chunk.favorite_os !== "macos") return callback();
            return callback(null, chunk);
        }
    }),

    // createWriteStream("./macos_users-ex-03.jsonl"),
    new Writable({
        objectMode: true,
        write(chunk, encoding, callback) {
            finalFile.write(JSON.stringify(chunk) + "\n");
            return callback();
        }
    }))
