import {argv} from 'yargs';

export class GlobalConfig {
    APP_BASE = argv['base'] || '/';
}