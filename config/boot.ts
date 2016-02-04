// By default Angular2 is running in Dev mode, comment lines 4 and 7 to run in Prod mode.

import {bootstrap} from 'angular2/platform/browser';
import { enableProdMode } from 'angular2/core';
import {App} from '../views/client/app';

enableProdMode();
bootstrap(App);
