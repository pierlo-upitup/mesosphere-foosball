<leaderboard class="app__section leaderboard">
        <header class="app__header">{ opts.title }</header>
        <div class="leaderboard__labels">
            <span class="leaderboard__label--name">Name</span>
            <a class="leaderboard__label--stats leaderboard__stats--wins" onclick={ handleSortByWins }>Wins</a>
            <a class="leaderboard__label--stats leaderboard__stats--losses" onclick={ handleSortByLosses }>Losses</a>
        </div>
        <ol class="leaderboard__list">
            <li class={ is-in-lead: id==parent.leader.id }
                each={ this.items }
                name={ id }>
                <span onclick={ parent.setUid } class="leaderboard__name">{ name }</span>
                <span class="leaderboard__stats leaderboard__stats--wins">{ wins }</span>
                <span class="leaderboard__stats leaderboard__stats--losses">{ losses }</span>
            </li>
        </ol>
    <script>
    this.items = opts.items;
    this.sorting = null;

    this.leader = _.max(opts.items, function(item) {
        return item.wins - item.losses;
    });

    handleSortByWins(e) {
        this.sortBy('wins');
    }

    handleSortByLosses(e) {
        this.sortBy('losses');
    }

    sortBy(field) {
        if (this.sorting === field) {
            this.items = this.items.reverse();
        } else {
            this.items = _.sortBy(this.items, field).reverse(); // desc
            this.sorting = field;
        }
    }

    setUid(e) {
        opts.user_selector.setuid(e.item.id);
    }
    </script>
</leaderboard>

