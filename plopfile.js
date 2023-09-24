// const { kebabCase } = require("lodash");
// kebabCaseを使用したい場合は{{ kebabCase name}}のように使用する

module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                // type: "input",
                name: 'name',
                message: 'コンポーネントの名前を入力してください',
            },
            {
                type: 'list',
                name: 'componentType',
                message: 'コンポーネントの種類を選択してください',
                choices: ['atoms', 'organisms', 'pages'],
            },
        ],
        actions: function (data) {
            const componentName = data.name;

            //pathの設定は適宜変更すること
            // const componentPath = `renderer/features/${data.componentType}/${componentName}/`;
            const componentPath = `src/components/${data.componentType}/${componentName}/`;
            return [
                {
                    type: 'add',
                    path: componentPath + 'index.tsx',
                    templateFile: 'plop/component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: componentPath + 'styles.ts',
                    templateFile: 'plop/styles.ts.hbs',
                },
                {
                    type: 'add',
                    path: componentPath + '{{name}}.stories.tsx',
                    templateFile: 'plop/stories.tsx.hbs',
                },
            ];
        },
    });
};
