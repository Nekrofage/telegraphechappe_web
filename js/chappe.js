$(document).ready(function() {
    const   $setter = $('.setter'),
            $setterInput = $setter.find('#position'),
            $setterMin = parseInt($setterInput.attr('min')),
            $setterMax = parseInt($setterInput.attr('max')),
            $setterPlus = $setter.find('.setter-form-controls-plus'),
            $setterMinus = $setter.find('.setter-form-controls-minus'),
            $telegraph = $('.telegraph'),
            $regulator = $telegraph.find('.regulator'),
            $indicator1 = $telegraph.find('.indicator1'),
            $indicator2 = $telegraph.find('.indicator2');

    // Set regulator and indicator position
    function removePositions(index, className) {
        let pattern = /position.*/;
        return (className.match(pattern) || []).join(' ');
    }

    function setPositions(positions, position) {
        const   classReg = "positionReg",
                classInd = "position";
        let regPos,
            ind1Pos,
            ind2Pos;

        regPos = classReg + positions[position].reg;
        ind1Pos = classInd + positions[position].ind1;
        ind2Pos = classInd + positions[position].ind2;

        // Add classes on regulator and indicators
        $regulator.removeClass(removePositions)
                  .addClass(regPos);
        $indicator1.removeClass(removePositions)
                   .addClass(ind1Pos);
        $indicator2.removeClass(removePositions)
                   .addClass(ind2Pos);
    };

    // Get default position number
    $setterInput.val($setterMin);

    // Get list of positions
    let jsonFile = "js/positions.json",
        request = new XMLHttpRequest();

    request.open('GET', jsonFile);
    request.responseType = 'json';
    request.send();

    request.onloadend = () => {

        if (request.readyState === 4 && request.status === 200) {
            let positions = request.response;

            // TO DO : SI une position existe OU si la position change
            setPositions(positions, $setterMin);

            $setterPlus.on("click", function() {
                let val = parseInt($setterInput.val());

                if (val < $setterMax) {
                    val += 1;
                    $setterInput.val(val);
                    setPositions(positions, val);
                }
            });

            $setterMinus.on("click", function() {
                let val = parseInt($setterInput.val());

                if (val > $setterMin) {
                    val -= 1;
                    $setterInput.val(val);
                    setPositions(positions, val);
                }
            });
        }
    };
});
