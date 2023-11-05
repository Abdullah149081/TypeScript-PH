{
    // Union
    type User = {
        name: string;
        gender: 'male' | 'female';
        bloodGroup: 'A+' | 'B+' | 'O+';
    };

    const user: User = {
        name: 'Masud',
        gender: 'male',
        bloodGroup: 'B+',
    };

    // Intersection

    type FrontEndDeveloper = {
        skills: string[];
        designations1: 'Front-end Developer';
    };

    type BackEndDeveloper = {
        skills: string[];
        designations2: 'Backend Developer';
    };
    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    const job: FullStackDeveloper = {
        skills: ['HTML', 'NodeJs'],
        designations1: 'Front-end Developer',
        designations2: 'Backend Developer',
    };
}
