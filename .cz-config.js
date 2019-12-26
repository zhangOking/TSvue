'use strict';

module.exports = {

    types: [{
            value: 'feat',
            name: 'feat: 一个新需求'
        },
        {
            value: 'fix',
            name: 'fix: 修复的bug'
        },
        {
            value: 'update',
            name: 'update: 功能升级'
        },
        {
            value: 'style',
            name: 'style: 修改样式'
        },
        {
            value: 'test',
            name: 'test: 测试文件'
        },
    ],

    scopes: [{
            name: '模块1'
        },
        {
            name: '模块2'
        },
        {
            name: '模块3'
        },
        {
            name: '模块4'
        }
    ],

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: '选择一种你的提交类型:',
        scope: '\n选择一个功能模块 (可选):',
        subject: '短说明:\n',
        body: '长说明，使用"|"换行(可选)：\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如：#31, #34(可选):\n',
        confirmCommit: '确定提交说明?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],

    // limit subject length
    subjectLimit: 100

};
