export function createJsonFromResult(jsonResult: string[][]) {
    let ans = []
    let j = 1
    while (j < jsonResult.length - 2) {
        let mp = new Map()
        for (let i = 0; i < jsonResult.length; i++) {
            let key = buildKey(jsonResult[i], j)
            if (key.length === 0 || key.length === jsonResult[i].length) {
                continue
            }
            if (mp.has(key)) {
                if (!mp.get(key).includes(jsonResult[i][j])) {
                    mp.set(key, [...mp.get(key), jsonResult[i][j]])
                }
            } else {
                mp.set(key, [jsonResult[i][j]])
            }
        }
        j++
        if (mp.size !== 0) ans.push(mp)
    }
    return ans
}

function buildKey(jsonRow: string[], index: number) {
    return jsonRow.slice(0, index).join("")
}