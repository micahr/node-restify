// Copyright 2012 Mark Cavage, Inc.  All rights reserved.

'use strict';

module.exports = function httpDate(now) {
    if (!now) {
        now = new Date();
    }

    return (now.toUTCString());
};
