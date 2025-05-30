import { createReadStream } from "node:fs";
import { writeFile } from "node:fs/promises";
import csvtojson from "csv-parser";

const stream = createReadStream("./data.csv")
    .pipe(csvtojson())

const items = [];
stream.on('data', (chunk) => {
    if (chunk.favorite_os !== "macos") return

    items.push(chunk);
});

stream.on("end", async () => {
    const jsonl = items.map(item => JSON.stringify(item)).join("\n");
    await writeFile("./macos_users-ex-02.jsonl", jsonl);
});