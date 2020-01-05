
document.getElementById('lbsInput').addEventListener('input', function (e) {
    let pounds = e.target.value;
    let grams = pounds/0.022046;
    document.getElementById('gramsOutput').innerHTML = grams;
    document.getElementById('kgOutput').innerHTML = grams/1000;
    document.getElementById('ozOutput').innerHTML = pounds * 16
});

