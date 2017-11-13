export declare class SimpleCrypt {
    encode(key: string, data: string): string;
    decode(key: string, data: string): string;
    private b64_table;
    private b64_encode(data);
    private b64_decode(data);
    private keyCharAt(key, i);
    private xor_encrypt(key, data);
    private xor_decrypt(key, data);
    /**
     * @param {string} key - password
     * @param data  javascript object
     * @returns {string}
     */
    static encodeDefault(key: string, data: any): string;
    /**
     * @param {string} key - password
     * @param {string} data encoded string
     * @returns {Object} javascript object
     */
    static decodeDefault(key: string, data: string): Object;
}
