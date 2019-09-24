$(document).ready(function() {
    const   $regulatorSetter = $('.regulatorSetter'),
            $setterRegulatorPosition = $regulatorSetter.find('#regulatorPosition'),
            $setterRegulatorMin = parseInt($regulatorSetter.attr('min')),
            $setterRegulatorMax = parseInt($regulatorSetter.attr('max')),
            $setterRegulatorPlus = $regulatorSetter.find('.setter-form-controls-plus'),
            $setterRegulatorMinus = $regulatorSetter.find('.setter-form-controls-minus'),


            $indicatorLeftSetter = $('.indicatorLeftSetter'),
            $setterIndicatorLeftPosition = $indicatorLeftSetter.find('#indicatorLeftPosition'),
            $setterIndicatorLeftMin = parseInt($regulatorLeftSetter.attr('min')),
            $setterIndicatorLeftMax = parseInt($regulatorLeftSetter.attr('max')),
            $setterIndicatorLeftPlus = $regulatorLeftSetter.find('.setter-form-controls-plus'),
            $setterIndicatorLeftMinus = $regulatorLeftSetter.find('.setter-form-controls-minus'),


            $indicatorRightSetter = $('.indicatorRightSetter'),
            $setterIndicatorRightPosition = $indicatorRightSetter.find('#indicatorRightPosition'),
            $setterIndicatorRightMin = parseInt($regulatorRightSetter.attr('min')),
            $setterIndicatorRightMax = parseInt($regulatorRightSetter.attr('max')),
            $setterIndicatorRightPlus = $regulatorRightSetter.find('.setter-form-controls-plus'),
            $setterIndicatorRightMinus = $regulatorRightSetter.find('.setter-form-controls-minus'),




            $telegraph = $('.telegraph'),
            $regulator = $telegraph.find('.regulator'),
            $indicatorLeft = $telegraph.find('.indicatorLeft'),
            $indicatorRight = $telegraph.find('.indicatorRight');

    // Set regulator and indicator position
    function removePositions(index, className) {
        let pattern = /Position.*/;
        return (className.match(pattern) || []).join(' ');
    }

    function setPositions(positions, position) {
        const   classRegulator = "positionRegulator",
                classIndicatorLeft = "positionIndicatorLeft",
                classIndicatorRight = "positionIndicatorRight";

        let regulatorPos,
            indicatorLeftPos,
            indicatorRightPos;

        regulatorPos = classRegulator + positions[position].regulator;
        indicatorLeftPos = classIndicatorLeft + positions[position].indicatorLeft;
        indicatorRightPos = classIndicatorLeft + positions[position].indicatorRight;

        // Add classes on regulator and indicators
        $regulator.removeClass(removePositions)
                  .addClass(regulatorPos);
        $indicatorLeft.removeClass(removePositions)
                   .addClass(indicatorLeftPos);
        $indicatorRight.removeClass(removePositions)
                   .addClass(indicatorRightPos);
    };

    // Get default position number
    $setterRegulatorPosition.val($setterRegulatorMin);
    $setterIndicatorLeftPosition.val($setterIndicatorLeftMin);
    $setterIndicatorRightPosition.val($setterIndicatorRightMin);


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

            $setterRegulatorPlus.on("click", function() {
                let val = parseInt($setterRegulatorPosition.val());

                if (val < $setterRegulatorMax) {
                    val += 1;
                    $setterRegulatorPosition.val(val);
                    setPositions(positions, val);
                }
            });

            $setterRegulatorMinus.on("click", function() {
                let val = parseInt($setterRegulatorPosition.val());

                if (val > $setterRegulatorMin) {
                    val -= 1;
                    $setterRegulatorPosition.val(val);
                    setPositions(positions, val);
                }
            });

            $setterIndicatorLeftPlus.on("click", function() {
                let val = parseInt($setterIndicatorLeftPosition.val());

                if (val < $setterIndicatorLeftMax) {
                    val += 1;
                    $setterIndicatorLeftPosition.val(val);
                    setPositions(positions, val);
                }
            });

            $setterIndicatorLeftMinus.on("click", function() {
                let val = parseInt($setterIndicatorLeftPosition.val());

                if (val > $setterIndicatorLeftMin) {
                    val -= 1;
                    $setterIndicatorLeftPosition.val(val);
                    setPositions(positions, val);
                }
            });

            $setterIndicatorRightPlus.on("click", function() {
                let val = parseInt($setterIndicatorRightPosition.val());

                if (val < $setterIndicatorRightMax) {
                    val += 1;
                    $setterIndicatorRightPosition.val(val);
                    setPositions(positions, val);
                }
            });

            $setterIndicatorRightMinus.on("click", function() {
                let val = parseInt($setterIndicatorRightPosition.val());

                if (val > $setterIndicatorRightMin) {
                    val -= 1;
                    $setterIndicatorRightPosition.val(val);
                    setPositions(positions, val);
                }
            });


            $setterRegulatorPosition.on('change input', function() {
                let val = parseInt($setterRegulatorPosition.val());

                if (val > $setterRegulatorMin && val < $setterRegukatorMax) {
                    setPositions(positions, val);
                }

                if (val < $setterRegulatorMin) {
                    $setterRegulatorPosition.val($setterRegulatorMin);
                    setPositions(positions, $setterMin);
                }

                if (val > $setterRegulatorMax) {
                    $setterRegulatorPosition.val($setterRegulatorMax);
                    setPositions(positions, $setterRegulatorMax);
                }
            });


            $setterIndicatorLeftPosition.on('change input', function() {
                let val = parseInt($setterIndicatorLeftPosition.val());

                if (val > $setterIndicatorLeftMin && val < $setterRegukatorMax) {
                    setPositions(positions, val);
                }

                if (val < $setterIndicatorLeftMin) {
                    $setterIndicatorLeftPosition.val($setterIndicatorLeftMin);
                    setPositions(positions, $setterMin);
                }

                if (val > $setterIndicatorLeftMax) {
                    $setterIndicatorLeftPosition.val($setterIndicatorLeftMax);
                    setPositions(positions, $setterIndicatorLeftMax);
                }
            });




            $setterIndicatorRightPosition.on('change input', function() {
                let val = parseInt($setterIndicatorRightPosition.val());

                if (val > $setterIndicatorRightMin && val < $setterRegukatorMax) {
                    setPositions(positions, val);
                }

                if (val < $setterIndicatorRightMin) {
                    $setterIndicatorRightPosition.val($setterIndicatorRightMin);
                    setPositions(positions, $setterMin);
                }

                if (val > $setterIndicatorRightMax) {
                    $setterIndicatorRightPosition.val($setterIndicatorRightMax);
                    setPositions(positions, $setterIndicatorRightMax);
                }
            });




        }
    };
});
