import { readdirSync } from 'fs';

const features = readdirSync('src/features').map(it => ({
    name: it,
    value: it,
}));

export default function (plop) {
    /**
     * src/components以下にコンポーネントを作成する
     */
    plop.setGenerator('components', {
        description: 'Create a new src/components',
        // promptsのnameがテンプレートに渡される
        prompts: [
            {
                type: 'list',
                name: 'name',
                message: 'feature name please',
                choices: ['ui-elements', 'ui-parts'],
            },
            {
                // type: "input",
                name: 'componentName',
                message: 'コンポーネントの名前を入力してください',
            },
        ],
        actions: function (data) {
            const choicesName = data.name;
            const componentName = data.componentName;

            //pathの設定は適宜変更すること
            // const componentPath = `renderer/features/${data.componentType}/${componentName}/`;
            const componentPath = `src/components/${choicesName}/${componentName}/`;
            return [
                {
                    type: 'add',
                    path: componentPath + 'index.tsx',
                    templateFile: 'plop/component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: componentPath + 'style.css.ts',
                    templateFile: 'plop/styles.css.ts.hbs',
                },
                {
                    type: 'add',
                    path: componentPath + '{{componentName}}.stories.tsx',
                    templateFile: 'plop/stories.tsx.hbs',
                },
            ];
        },
    });
    /**
     * src/features以下にコンポーネントを作成する
     */
    plop.setGenerator('features', {
        description: 'Create a new src/features/components',
        // promptsのnameがテンプレートに渡される
        prompts: [
            {
                type: 'list',
                name: 'name',
                message: 'feature name please',
                choices: features,
            },
            {
                // type: "input",
                name: 'componentName',
                message: 'コンポーネントの名前を入力してください',
            },
        ],
        actions: function (data) {
            const choicesName = data.name;
            const componentName = data.componentName;

            //pathの設定は適宜変更すること
            // const componentPath = `renderer/features/${data.componentType}/${componentName}/`;
            const componentPath = `src/features/${choicesName}/${componentName}/`;
            return [
                {
                    type: 'add',
                    path: componentPath + 'index.tsx',
                    templateFile: 'plop/component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: componentPath + 'style.css.ts',
                    templateFile: 'plop/styles.css.ts.hbs',
                },
                {
                    type: 'add',
                    path: componentPath + '{{componentName}}.stories.tsx',
                    templateFile: 'plop/stories.tsx.hbs',
                },
            ];
        },
    });
}
