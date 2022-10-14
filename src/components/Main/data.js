const data = [{
    id: '1',
    image:'https://medias.musimundo.com/medias/00325007-142200-142200-01-142200-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2NTc1NXxpbWFnZS9qcGVnfGg4ZS9oYzEvMTAzODAyNDI2MTYzNTAvMDAzMjUwMDctMTQyMjAwLTE0MjIwMF8wMS0xNDIyMDBfMDEuanBnX3NpemU1MTV8MjQ4ZWRkYTA1NTk4OTY5MjIyNWMwZGMwYTEwNWQ1YzU0Yzk4ZWQwOTU3MzQzZTEwYzdhM2EwNWUyYzYyMzE1ZQ',
    title:'CELULAR SAMSUNG A32 NEGRO',
    trademark:'Samsung',
    coast:'$75.999,00'
},{
    id: '2',
    image:'https://medias.musimundo.com/medias/00460019-144679-144679-01-144679-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjAwN3xpbWFnZS9qcGVnfGg0Mi9oNzQvMTAzODExMjUxNTY4OTQvMDA0NjAwMTktMTQ0Njc5LTE0NDY3OV8wMS0xNDQ2NzlfMDEuanBnX3NpemU1MTV8ZTIwOGU0NjkyZjVhMThkMzUyNWRmZjNhNmI3NzRiNGYwYTUxMWYzOGU3MTQ3MTQ1NzE1YTgwZTAxMTI5Yjg3Ng',
    title:'CELULAR SAMSUNG GALAXY Z FLIP 3 5G NEW CHIP BEIGE',
    trademark:'Samsung',
    coast:'$219.999,00'
},{
    id: '3',
    image:'https://medias.musimundo.com/medias/00510014-145437-145437-01-145437-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NzEwMnxpbWFnZS9qcGVnfGgwOS9oODQvMTAzOTA4NTMxMjQxMjYvMDA1MTAwMTQtMTQ1NDM3LTE0NTQzN18wMS0xNDU0MzdfMDEuanBnX3NpemU1MTV8NWViNDJlZDUwZDU1YWZmYWQ4Yjc4NTMxZTUwZTI0NGRkNjViNjE0ZmRmMTMwMDJhODc5NGI2YmMyM2I2ZDkzNQ',
    title:'CELULAR SAMSUNG S22+ / SM-S906EZKMARO ROSA',
    trademark:'Samsung',
    coast:'$279.999,00'
},{
    id: '4',
    image:'https://medias.musimundo.com/medias/00524012-145781-145781-01-145781-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0NTI0NHxpbWFnZS9qcGVnfGgzYy9oOGMvMTAzODE2NTQ4NTE2MTQvMDA1MjQwMTItMTQ1NzgxLTE0NTc4MV8wMS0xNDU3ODFfMDEuanBnX3NpemU1MTV8NjNmODYxNmZkYWYwNTY5YmE5NDhjMDkwM2YwN2ZlZDI5OWQwYmZmYjE2MDhhOGUyM2FkNDEyODRiMDczZGI1OQ',
    title:'CELULAR APPLE IPHONE 13 - MLPH3LE/A ROSA',
    trademark:'Iphone',
    coast:'$658.879,00'
},{
    id: '5',
    image:'https://www.tradeinn.com/f/13782/137821900/apple-iphone-11-64gb-6.1.jpg',
    title:'CELULAR APPLE IPHONE 11 - BLANCO',
    trademark:'Iphone',
    coast:'$88.700,00'
},{
    id: '6',
    image:'https://medias.musimundo.com/medias/00322013-142163-142163-01-142163-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyNDk0OXxpbWFnZS9qcGVnfGgyNC9oOGYvMTAzODAxODU1MzQ0OTQvMDAzMjIwMTMtMTQyMTYzLTE0MjE2M18wMS0xNDIxNjNfMDEuanBnX3NpemU1MTV8OWQ5OTdhNDljMzYwMTk2NWMzZmIyODE0OGY3NjMwNmY2OGQ5MmIyMzgyNDhhMGQzODU1MjJiODc4YTJhNDVkMg',
    title:'AURICULAR PHILCO AP9TWS',
    trademark:'Philco',
    coast:' $11.999,00'
},{
    id: '7',
    image:'https://medias.musimundo.com/medias/00421029-143676-143676-01-143676-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wxNzEyMnxpbWFnZS9qcGVnfGhiNS9oNzYvMTAzODA3ODU3NDU5NTAvMDA0MjEwMjktMTQzNjc2LTE0MzY3Nl8wMS0xNDM2NzZfMDEuanBnX3NpemU1MTV8ZjFjMDdmZDQyYmJiNTE3ZGQ1NTdjMDJjMzk5M2NiNDg4MGU4MmI3MzNmYjg0MDg5YWIwZjg0MzhlMTcwZDAxOA',
    title:'AURICULAR HAVIT E303P',
    trademark:'HAVIT',
    coast:'$1.169,00'
},{
    id: '8',
    image:'https://medias.musimundo.com/medias/00416002-143633-143633-01-143633-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wyMDU2NXxpbWFnZS9qcGVnfGg2OS9oOTEvMTAzODA3NjQyMTczNzQvMDA0MTYwMDItMTQzNjMzLTE0MzYzM18wMS0xNDM2MzNfMDEuanBnX3NpemU1MTV8YWJlY2IyODQwYzJiMzBjNTgyYTRlOTRlNzAwZjc1MDRkNjZlOTlmNTIyMGM4ZTBkZjZmYWI5MDI5ZDA1ZGEyOQ',
    title:'CARGADOR SAMSUNG EP-TA20RW',
    trademark:'Samsung',
    coast:'$3.499,00'
}
]

export default data