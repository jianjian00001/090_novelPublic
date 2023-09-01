var prefix = "/test/order"
$(function () {
    load();
});

function load() {
    $('#exampleTable')
        .bootstrapTable(
            {
                method: 'get', // 服务器数据的请求方式 get or post
                url: prefix + "/list", // 服务器数据的加载地址
                //	showRefresh : true,
                //	showToggle : true,
                //	showColumns : true,
                iconSize: 'outline',
                toolbar: '#exampleToolbar',
                striped: true, // 设置为true会有隔行变色效果
                dataType: "json", // 服务器返回的数据类型
                pagination: true, // 设置为true会在底部显示分页条
                // queryParamsType : "limit",
                // //设置为limit则会发送符合RESTFull格式的参数
                singleSelect: false, // 设置为true将禁止多选
                // contentType : "application/x-www-form-urlencoded",
                // //发送到服务器的数据编码类型
                pageSize: 10, // 如果设置了分页，每页数据条数
                pageNumber: 1, // 如果设置了分布，首页页码
                //search : true, // 是否显示搜索框
                showColumns: false, // 是否显示内容下拉框（选择显示的列）
                sidePagination: "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
                queryParams: function (params) {
                    //说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
                    var queryParams = getFormJson("searchForm");
                    queryParams.limit = params.limit;
                    queryParams.offset = params.offset;
                    return queryParams;
                },
                // //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
                // queryParamsType = 'limit' ,返回参数必须包含
                // limit, offset, search, sort, order 否则, 需要包含:
                // pageSize, pageNumber, searchText, sortName,
                // sortOrder.
                // 返回false将会终止请求
                responseHandler: function (rs) {

                    if (rs.code == 0) {
                        return rs.data;
                    } else {
                        parent.layer.alert(rs.msg)
                        return {total: 0, rows: []};
                    }
                },
                columns: [
                    {
                        checkbox: true
                    },
                    {
                        title: '序号',
                        formatter: function () {
                            return arguments[2] + 1;
                        }
                    },
                                                                        {
                                field: 'id',
                                title: '主键'
                            },

                        
                                                                        {
                                field: 'fbMerchantCode',
                                title: '付呗商户号'
                            },

                        
                                                                        {
                                field: 'merchantOrderSn',
                                title: '第三方商户的订单号'
                            },

                        
                                                                        {
                                field: 'orderSn',
                                title: '付呗订单号',
                                formatter: function (value, row, index) {
                                    return formatDict("color", value);
                                }
                            },
                        
                                                                        {
                                field: 'platformOrderNo',
                                title: '平台方订单号',
                                formatter: function (value, row, index) {
                                    return formatDict("oa_leave_type", value);
                                }
                            },
                        
                                                                        {
                                field: 'tradeNo',
                                title: '商户单号'
                            },

                        
                                                                        {
                                field: 'orderState',
                                title: '订单状态，1：未支付，2：支付成功，3：支付失败，4：支付取消',
                                formatter: function (value, row, index) {
                                    return formatDict("yes_no", value);
                                }
                            },
                        
                                                                        {
                                field: 'fnCoupon',
                                title: '蜂鸟优惠卷抵扣'
                            },

                        
                                                                        {
                                field: 'redPacket',
                                title: '红包抵扣'
                            },

                        
                                                                        {
                                field: 'totalFee',
                                title: '实收金额(元)'
                            },

                        
                                                                        {
                                field: 'orderPrice',
                                title: '订单金额'
                            },

                        
                                                                        {
                                field: 'fee',
                                title: '手续费(元)'
                            },

                        
                                                                        {
                                field: 'body',
                                title: '对商品或交易的描述',
                                formatter: function (value, row, index) {
                                    return "<img width='100' height='100' src='" + value + "'>";
                                }
                            },
                        
                                                                        {
                                field: 'attach',
                                title: '附加数据'
                            },

                        
                                                                        {
                                field: 'storeId',
                                title: '付呗系统的门店id'
                            },

                        
                                                                        {
                                field: 'cashierId',
                                title: '付呗系统的收银员id'
                            },

                        
                                                                        {
                                field: 'deviceNo',
                                title: '设备终端号'
                            },

                        
                                                                        {
                                field: 'userId',
                                title: '微信顾客支付授权的“open_id”或者支付宝顾客的“buyer_user_id”'
                            },

                        
                                                                        {
                                field: 'userLogonId',
                                title: '支付宝顾客的账号'
                            },

                        
                                                                        {
                                field: 'payTime',
                                title: '交易成功的时间'
                            },

                        
                                                                        {
                                field: 'payChannel',
                                title: '支付通道:1微信、2支付宝、3银联',
                                formatter: function (value, row, index) {
                                    return formatDict("del_flag", value);
                                }
                            },
                        
                                                                        {
                                field: 'noCashCouponFee',
                                title: '免充值代金券金额(元)'
                            },

                        
                                                                        {
                                field: 'cashCouponFee',
                                title: '预充值代金券金额(元)'
                            },

                        
                                                                        {
                                field: 'cashFee',
                                title: '顾客实际支付金额(元)'
                            },

                        
                                                                        {
                                field: 'sign',
                                title: '签名',
                                formatter: function (value, row, index) {
                                    return formatDict("theme", value);
                                }
                            },
                        
                                                                        {
                                field: 'options',
                                title: '其它选项',
                                formatter: function (value, row, index) {
                                    return "<img width='100' height='100' src='" + value + "'>";
                                }
                            },
                        
                                                                        {
                                field: 'createTime',
                                title: '创建时间'
                            },

                        
                                                                        {
                                field: 'pushTime',
                                title: '推送时间'
                            },

                        
                                                                        {
                                field: 'pushIp',
                                title: '推送IP'
                            },

                        
                                                                        {
                                field: 'mchtId',
                                title: '商户id'
                            },

                        
                                                                        {
                                field: 'sn',
                                title: 'QR编号'
                            },

                        
                                        {
                        title: '操作',
                        field: 'id',
                        align: 'center',
                        formatter: function (value, row, index) {
                            var d = '<a class="btn btn-primary btn-sm ' + s_detail_h + '" href="#" mce_href="#" title="详情" onclick="detail(\''
                                + row.id
                                + '\')"><i class="fa fa-file"></i></a> ';
                            var e = '<a class="btn btn-primary btn-sm ' + s_edit_h + '" href="#" mce_href="#" title="编辑" onclick="edit(\''
                                + row.id
                                + '\')"><i class="fa fa-edit"></i></a> ';
                            var r = '<a class="btn btn-warning btn-sm ' + s_remove_h + '" href="#" title="删除"  mce_href="#" onclick="remove(\''
                                + row.id
                                + '\')"><i class="fa fa-remove"></i></a> ';
                            return d + e + r;
                        }
                    }]
            });
}
function reLoad() {
    $('#exampleTable').bootstrapTable('refresh');
}
function add() {
    layer.open({
        type: 2,
        title: '增加',
        maxmin: true,
        shadeClose: false, // 点击遮罩关闭层
        area: ['800px', '520px'],
        content: prefix + '/add' // iframe的url
    });
}
function detail(id) {
    layer.open({
        type: 2,
        title: '详情',
        maxmin: true,
        shadeClose: false, // 点击遮罩关闭层
        area: ['800px', '520px'],
        content: prefix + '/detail/' + id // iframe的url
    });
}
function edit(id) {
    layer.open({
        type: 2,
        title: '编辑',
        maxmin: true,
        shadeClose: false, // 点击遮罩关闭层
        area: ['800px', '520px'],
        content: prefix + '/edit/' + id // iframe的url
    });
}
function remove(id) {
    layer.confirm('确定要删除选中的记录？', {
        btn: ['确定', '取消']
    }, function () {
        $.ajax({
            url: prefix + "/remove",
            type: "post",
            data: {
                'id': id
            },
            success: function (r) {
                if (r.code == 0) {
                    layer.msg(r.msg);
                    reLoad();
                } else {
                    layer.msg(r.msg);
                }
            }
        });
    })
}

function resetPwd(id) {
}
function batchRemove() {
    var rows = $('#exampleTable').bootstrapTable('getSelections'); // 返回所有选择的行，当没有选择的记录时，返回一个空数组
    if (rows.length == 0) {
        layer.msg("请选择要删除的数据");
        return;
    }
    layer.confirm("确认要删除选中的'" + rows.length + "'条数据吗?", {
        btn: ['确定', '取消']
        // 按钮
    }, function () {
        var ids = new Array();
        // 遍历所有选择的行数据，取每条数据对应的ID
        $.each(rows, function (i, row) {
            ids[i] = row['id'];
        });
        $.ajax({
            type: 'POST',
            data: {
                "ids": ids
            },
            url: prefix + '/batchRemove',
            success: function (r) {
                if (r.code == 0) {
                    layer.msg(r.msg);
                    reLoad();
                } else {
                    layer.msg(r.msg);
                }
            }
        });
    }, function () {

    });
}