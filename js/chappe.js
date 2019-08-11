$(document).ready(function() {
    const   $telegraph = $('.telegraph'),
            $regulator = $telegraph.find('.regulator'),
            $indicator1 = $telegraph.find('.indicator1'),
            $indicator2 = $telegraph.find('.indicator2');

    // Get position number
    let pos = 42;

    // Get table of positions
    let jsonFile = "js/positions.json",
        request = new XMLHttpRequest();

    request.open('GET', jsonFile, true);
    request.responseType = 'json';
    request.send();

    request.onload = () => {

        let positions = request.response;

        // Set regulator and indicator position
        // SI une position existe OU si la position change
        const   classReg = "positionReg",
                classInd = "position";
        let $regPos,
            $ind1Pos,
            $ind2Pos;

        $regPos = classReg + positions[pos].reg;
        $ind1Pos = classInd + positions[pos].ind1;
        $ind2Pos = classInd + positions[pos].ind2;

        // Add classes on regulator and indicators
        $regulator.addClass($regPos);
        $indicator1.addClass($ind1Pos);
        $indicator2.addClass($ind2Pos);
    }
});
