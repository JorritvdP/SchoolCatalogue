//practice

class School {
    constructor(named, level, numberOfStudents) {
        this._named = named;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get named() {
        return this._named;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumber) {
        if(newNumber = 'number') {
        this._numberOfStudents = newNumber;
    } else {
        return 'Invalid input: numberOfStudents must be set to a Number';
    }
    }

    quickFacts() {
        console.log(`${this.named} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let i = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[i];
    }
}

class PrimarySchool extends School {
    constructor(named, numberOfStudents, pickupPolicy) {
        super(named, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(named, numberOfStudents, sportsTeams) {
        super(named, 'High', numberOfStudents, sportsTeams);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts()
console.log(lorraineHansbury.pickupPolicy)
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeams[2])