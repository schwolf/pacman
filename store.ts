import {EntryData} from '../common/EntryData';
import {IStore} from './IStore';
import {Model, createConnection} from 'mongoose';
import {IEntryDataModel} from './IEntryDataModel';
import {entryDataSchema} from '../infrastructure/entryDataSchema';

export class Store implements IStore {

    private model: Model<IEntryDataModel>;

    constructor(uri: string) {
        const connection = createConnection(uri);
        this.model = connection.model<IEntryDataModel>('EntryData', entryDataSchema, 'EntryData');
    }

    public getEntryData(id: string): EntryData {
        return new EntryData('1', '2', '3', '4');
    }

    public insertEntryData(entryData: EntryData): Promise<boolean> {
        const theData = new this.model(entryData);

        return new Promise((resolve, reject) => {
            theData.save((err, theData, numAffected) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    }
}
