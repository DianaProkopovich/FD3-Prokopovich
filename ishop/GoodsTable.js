var GoodsTable = React.createClass({

    displayName: "GoodsTable",
    render: function() {
    // формирование блока товаров
    var goods=[];
    let heading = React.DOM.tr( {className:'className'}, 
                    React.DOM.th( {className:'className'}, "Наименование"),
                    React.DOM.th( {className:'className'}, "товар"),
                    React.DOM.th( {className:'className'}, "остаток на складе"));
    goods.push(heading);
    this.props.goods.forEach(item => {
        // строки товаров   
        var goodTd =    
            React.DOM.tr({key:item.code},
                React.DOM.td({className:'className'},item.name),
                React.DOM.td({className:'className'},
                    React.DOM.img({className:'className', src: item.url})),
                React.DOM.td({className:'className'},item.amount),
            );
        // создается массив HTML-строк товаров
        goods.push(goodTd);
    }); 

        
    return React.DOM.table( {className:'GoodsTable'}, 
        React.DOM.thead( {className:'Heading'}, this.props.shopName),
        React.DOM.tbody( {className:'className'}, goods ),
    );
    },
});