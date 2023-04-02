import mock from "./mock";

import "./customers";
import "./weekly-stats";
import "./recent-transactions";

mock.onAny().passThrough();
