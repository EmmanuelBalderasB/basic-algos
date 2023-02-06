class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.followers;
        this.followers = [];
        this.following = [];
        this.followersNum = this.followers.length;
    }
    followUser(userID) {
        this.following.push(userID);
        for (const user of users) {
            //console.log(user.id);
            if (user.id === userID) {
                user.followers.push(this.id);
                user.followersNum++;
            }
        }
        return 0;
    }
    unfollowUser(userID) {
        let index = 0;
        let array = this.following;
        for (let i = 0; i < this.following.length; i++) {
            if (userID === array[i]) {
                index = i;
            }
        }
        this.following.splice(index, 1);
        for (const user of users) {
            if (user.id === userID) {
                let arr = user.followers;
                let j = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (this.id === arr[i]) {
                        j = i;
                    }
                }
                arr.splice(j, 1);
                user.followersNum--;
            }
        }
    }
    getFollowers() {
        return this.followers;
    }

    getFollowing() {
        return this.following;
    }
}


const todd = new User('Todd', 'todd#001');

const rebecca = new User('Rebecca', 'reb#001');

let users = [todd, rebecca]

todd.followUser('reb#001');
console.log(todd, rebecca);
console.log(todd.getFollowing());
console.log(rebecca.getFollowers());
todd.unfollowUser('reb#001');
console.log(todd.getFollowing());
console.log(rebecca.getFollowers());
console.log(todd, rebecca);