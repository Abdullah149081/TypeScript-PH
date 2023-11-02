{
    // spread Operator
    const friends1: string[] = ['Riajul', 'Mes', 'Mijan'];
    const friends2: string[] = ['Asad', 'Shamim', 'Rafi'];

    friends1.push(...friends2);
    console.log(friends1, friends2);

    // Rest Operator

    const greetingFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    };
    greetingFriends('Asad');
}
