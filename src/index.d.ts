import { SpawnOptionsWithoutStdio } from "child_process";
import { EventEmitter } from "events";
import { Readable } from "stream";

declare module "@logion/node-exiftool" {

    export const EXIFTOOL_PATH: string;

    export const events: { OPEN: string, EXIT: string };

    export type ExifData = Record<string, string>;

    export type ReadWriteResult = {data: (ExifData | null)[], error: string | null};

    export class ExiftoolProcess extends EventEmitter {

        constructor(bin?: string);

        open(encoding?: string, options?: SpawnOptionsWithoutStdio): Promise<number>;

        close(): Promise<void>;

        get isOpen(): boolean;

        readMetadata(file: string | Readable, args: string[]): Promise<ReadWriteResult>;

        writeMetadata(file: string, data: ExifData, args?: string[], debug?: boolean): Promise<ReadWriteResult>;
    }    
}
