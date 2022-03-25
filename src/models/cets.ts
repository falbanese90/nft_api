import Client from '../database';

export type Cet = {
    symbol: string;
    floor: number;
    listed_count: number;
};

export class Cet_Store {
    async add(cet: Cet): Promise<Cet> {
        try {
            const conn = await Client.connect();
            const sql =
                'INSERT INTO cets_on_creck(symbol, floor_price, listed_count) VALUES($1, $2, $3) RETURNING *;';
            const result = await conn.query(sql, [
                cet.symbol as string,
                cet.floor as number,
                cet.listed_count as number,
            ]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
    async index(): Promise<Cet[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM cets_on_creck;';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
}
