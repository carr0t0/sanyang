// 슬라이더 엘리먼트와 프레임들을 가져오기
const slider = document.getElementById('slider');
const frames = document.querySelectorAll('.svg');  // 모든 .svg 클래스 요소들을 가져옴
const sliderTicks = document.getElementById('slider-ticks');  // 눈금 컨테이너
let ticks;  // ticks를 나중에 초기화할 변수

// 각 프레임을 슬라이더 값에 따라 보여주기/숨기기
slider.addEventListener('input', function() {
    // 모든 프레임 숨기기
    frames.forEach(frame => frame.style.display = 'none');

    // 현재 슬라이더 값에 해당하는 프레임만 보이게 설정
    const currentFrame = document.getElementById('frame-' + slider.value);
    currentFrame.style.display = 'block';

    // 강조된 눈금 초기화
    ticks.forEach(tick => tick.classList.remove('highlighted'));

    // 현재 슬라이더 값에 해당하는 눈금 강조
    const currentTick = ticks[slider.value - 1];  // 0-based index
    if (currentTick) {
        currentTick.classList.add('highlighted');
    }
});

// 페이지가 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더의 눈금 표시를 동적으로 생성
    for (let i = 1; i <= 21; i++) {
        const tick = document.createElement('span');
        sliderTicks.appendChild(tick);
    }

    // `ticks`를 이제 초기화
    ticks = sliderTicks.querySelectorAll('span'); // 눈금들

    // 모든 프레임을 숨기기
    frames.forEach(frame => frame.style.display = 'none');

    // 'frame-11'만 보이게 설정
    const initialFrame = document.getElementById('frame-11');
    if (initialFrame) {
        initialFrame.style.display = 'block';
    }

    // 모든 눈금 초기화
    ticks.forEach(tick => tick.classList.remove('highlighted'));

    // 'frame-11'에 해당하는 눈금 강조
    const initialTick = ticks[10];  // 'frame-11'은 0-based index로 10번
    if (initialTick) {
        initialTick.classList.add('highlighted');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // 각 SVG object 태그들을 선택합니다.
    const svgA2 = document.querySelectorAll('.svg_a2');
    const svgA3 = document.querySelectorAll('.svg_a3');
    const svgA4 = document.querySelectorAll('.svg_a4');
    
    // 각 슬라이더의 색상 변경 이벤트 처리
    document.getElementById('hueSliderA2').addEventListener('input', function (event) {
        const hueValueA2 = event.target.value;
        updateSVGColor(svgA2, 'a2', hueValueA2);
    });

    document.getElementById('hueSliderA3').addEventListener('input', function (event) {
        const hueValueA3 = event.target.value;
        updateSVGColor(svgA3, 'a3', hueValueA3);
    });

    document.getElementById('hueSliderA4').addEventListener('input', function (event) {
        const hueValueA4 = event.target.value;
        updateSVGColor(svgA4, 'a4', hueValueA4);
    });

    // 각 슬라이더의 밝기 변경 이벤트 처리
    document.getElementById('brightnessSliderA2').addEventListener('input', function (event) {
        const brightnessValueA2 = event.target.value;
        updateSVGBrightness(svgA2, 'a2', brightnessValueA2);
    });

    document.getElementById('brightnessSliderA3').addEventListener('input', function (event) {
        const brightnessValueA3 = event.target.value;
        updateSVGBrightness(svgA3, 'a3', brightnessValueA3);
    });

    document.getElementById('brightnessSliderA4').addEventListener('input', function (event) {
        const brightnessValueA4 = event.target.value;
        updateSVGBrightness(svgA4, 'a4', brightnessValueA4);
    });

    // 색상 업데이트 함수
    function updateSVGColor(svgElements, className, hue) {
        svgElements.forEach(function(svgElement) {
            const svgDoc = svgElement.contentDocument;
            if (svgDoc) {
                const elements = svgDoc.querySelectorAll(`.${className}`); // 'a2', 'a3', 'a4' 클래스를 가진 요소들

                elements.forEach(function (el) {
                    // 색조(hue) 값에 따른 fill 속성 변경
                    el.style.fill = `hsl(${hue}, 100%, 50%)`;
                });
            }
        });
    }

    // 밝기 업데이트 함수
    function updateSVGBrightness(svgElements, className, brightness) {
        svgElements.forEach(function(svgElement) {
            const svgDoc = svgElement.contentDocument;
            if (svgDoc) {
                const elements = svgDoc.querySelectorAll(`.${className}`); // 'a2', 'a3', 'a4' 클래스를 가진 요소들

                elements.forEach(function (el) {
                    // 밝기(brightness) 값에 따른 filter 속성 변경
                    el.style.filter = `brightness(${brightness})`;
                });
            }
        });
    }

    // 채도 슬라이더 이벤트 처리
    document.getElementById('saturationSliderA2').addEventListener('input', function (event) {
        const saturationValueA2 = event.target.value;
        const hueValueA2 = document.getElementById('hueSliderA2').value;
        const brightnessValueA2 = document.getElementById('brightnessSliderA2').value;
        updateSVGSaturation(svgA2, 'a2', hueValueA2, saturationValueA2, brightnessValueA2);
    });

    document.getElementById('saturationSliderA3').addEventListener('input', function (event) {
        const saturationValueA3 = event.target.value;
        const hueValueA3 = document.getElementById('hueSliderA3').value;
        const brightnessValueA3 = document.getElementById('brightnessSliderA3').value;
        updateSVGSaturation(svgA3, 'a3', hueValueA3, saturationValueA3, brightnessValueA3);
    });

    document.getElementById('saturationSliderA4').addEventListener('input', function (event) {
        const saturationValueA4 = event.target.value;
        const hueValueA4 = document.getElementById('hueSliderA4').value;
        const brightnessValueA4 = document.getElementById('brightnessSliderA4').value;
        updateSVGSaturation(svgA4, 'a4', hueValueA4, saturationValueA4, brightnessValueA4);
    });

    // 채도 업데이트 함수
    function updateSVGSaturation(svgElements, className, hue, saturation, brightness) {
        svgElements.forEach(function(svgElement) {
            const svgDoc = svgElement.contentDocument;
            if (svgDoc) {
                const elements = svgDoc.querySelectorAll(`.${className}`);

                elements.forEach(function (el) {
                    // 채도(saturation) 값에 따른 fill 속성 변경
                    el.style.fill = `hsl(${hue}, ${saturation * 100}%, ${brightness * 50}%)`;
                });
            }
        });
    }
});

