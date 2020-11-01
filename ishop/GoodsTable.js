var GoodsTable = React.createClass({

    displayName: "GoodsTable",
    render: function() {
    // формирование блока товаров
    var goods=[];
    let heading = React.DOM.tr( {key:'GoodsTableCaption', className:'TableHeader'}, 
                    React.DOM.th( {className:'#'}, "Наименование"),
                    React.DOM.th( {className:'#'}, "Товар"),
                    React.DOM.th( {className:'#'}, "Цена"),
                    React.DOM.th( {className:'#'}, "Остаток на складе"));
    goods.push(heading);
    this.props.goods.forEach(item => {
        // строки товаров  
        var goodTd =    
            React.DOM.tr({key:item.code, className:'GoodRow'},
                React.DOM.td({className:'.Name'},item.name),
                React.DOM.td({className:'Image'},
                    React.DOM.img({className:'#', src: item.url})),
                React.DOM.td({className:'Price'},item.price),
                React.DOM.td({className:'Amount'},item.amount),
            );
        // создается массив HTML-строк товаров
        goods.push(goodTd);
    }); 
        
    return React.DOM.table( {className:'GoodsTable'}, 
        React.DOM.caption( {className:'ShopName'}, this.props.shopName),
        React.DOM.tbody( {className:'className'}, goods ),
    );
    },
});