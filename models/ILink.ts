import {BaseModel} from "./BaseModel";

export interface TLink extends BaseModel<string> {
    title: string;
    link: string;
}
