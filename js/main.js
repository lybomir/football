$(function () {
    const dots = [{
            left: 437.98828125,
            top: 160,
            class: 'goalKeeperTopLeft'
        },
        {
            left: 437.98828125,
            top: 410,
            class: 'goalKeeperBottomLeft'
        },
        {
            left: 1017.98828125,
            top: 160,
            class: 'goalKeeperTopRight'
        },
        {
            left: 1017.98828125,
            top: 410,
            class: 'goalKeeperBottomRight'
        }];
    let random = parseInt(Math.random() * 4);
    console.log(random);



    $('.circle').click(function () {
        let shot = this;
        $('.ball').animate({
            left: $(this).offset().left + 'px',
            top: $(this).offset().top + 'px'
        }, 1000);

        $('.goalkeeper').animate({
            left: dots[random].left + 'px',
            top: dots[random].top + 'px'
        }, 1000);

        $('.goalkeeper').addClass(dots[random].class);

        function checkGoal() {
            if ($(shot).offset().left === dots[random].left) {
                console.log(this);
                if ($(shot).offset().top === dots[random].top) {
                    alert('Catch');
                } else {
                    alert('Goal');
                }
            } else {
                alert('Goal');
            }
            location.reload();
        }
        setInterval(checkGoal, 1000);
    });


});
