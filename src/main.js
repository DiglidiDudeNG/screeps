var roles = require('roles');

module.exports.loop = function () {
    var name;
    for (name in Game.creeps) {
        var curCreep = Room.creeps[name];

        switch (curCreep.memory.role) {
            case 'harvester':
                harvester(curCreep);
                break;
            case 'builder':
                builder(curCreep);
                break;
            case 'guard':
                guard(curCreep);
                break;
        }
    }
};
