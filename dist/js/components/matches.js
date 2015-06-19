<matches class="app__section recent-matches">
    <header class="app__header">{ opts.title }</header>
    <a href="#0" class="match-details" each={ this.items } name={ id }>
        <div class="match-details__team match-details__team--a is-winner">
            <header class="match-details__team__header">Team A</header>
            <span class="match-details__team__player">{ parent.getUserName(teamA[0]) }</span>
            <span class="match-details__team__player">{ parent.getUserName(teamA[1]) }</span>
            <span class="match-details__team__points">{ scoreA } points</span>
        </div>
        <div class="match-details__vs"><span>VS</span></div>
        <div class="match-details__team match-details__team--b">
            <header class="match-details__team__header">Team B</header>
            <span class="match-details__team__player">{ parent.getUserName(teamB[0]) }</span>
            <span class="match-details__team__player">{ parent.getUserName(teamB[1]) }</span>
            <span class="match-details__team__points">{ scoreB } points</span>
        </div>
    </a>
    <script>
        this.items = opts.items;
        this.users = opts.users;
        this.uid = null;

        getUserName(uid){
            return this.users[uid];
        }

        opts.user_selector.on('setuid', function(uid) {
            this.items = _.filter(opts.items, function(match){
                return match.teamA.indexOf(uid) >= 0 || match.teamB.indexOf(uid) >= 0;
            });
        });
    </script>
</matches>
