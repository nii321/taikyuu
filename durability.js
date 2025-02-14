function calculateDurability() {
    // 入力値の取得
    const H = parseFloat(document.getElementById('H').value);
    const Z = parseFloat(document.getElementById('Z').value);
    const B = parseFloat(document.getElementById('B').value);
    const K = parseFloat(document.getElementById('K').value);
    const hz = parseFloat(document.getElementById('hz').value);
    const hb = parseFloat(document.getElementById('hb').value);
    const hk = parseFloat(document.getElementById('hk').value);

    // 計算処理
    const W = 100 / (hz + hb + hk);
    const Whz = hz * W;
    const Whb = hb * W;
    const Whk = hk * W;
    
    const ZD = Whz * (100 - Z) / 100;
    const ZB = Whb * (100 - B) / 100;
    const ZK = Whk * (100 - K) / 100;
    
    const durabilityIndex = H / (ZD + ZB + ZK);

    // 結果の表示
    document.getElementById('result').innerHTML = 
        `機体耐久指数: ${durabilityIndex.toFixed(2)}`;
}
