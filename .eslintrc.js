module.exports = {
    plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    parser: 'babel-eslint',
    rules: {
        'no-confusing-arrow': 0, // doesn't work well with prettier
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-filename-extension': 0, // we don't use .jsx extension
        'react/destructuring-assignment': 0, // not using destructuring is just fine
        camelcase: 0, // we don't use camelcase all the time
        'class-methods-use-this': 0, // helper methods don't have to use this
        'react/no-multi-comp': 0, // why not?
        'no-unused-expressions': [
            2,
            {
                allowTernary: true,
                allowShortCircuit: true,
            },
        ],
        'react/sort-comp': 0, // control freaky
        'no-shadow': 0, // why not?
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 1,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/label-has-for': 1,
        'jsx-a11y/label-has-associated-control': 1,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/interactive-supports-focus': 1,
        'jsx-a11y/anchor-has-content': 1,
        'jsx-a11y/mouse-events-have-key-events': 1,
        'jsx-a11y/no-noninteractive-tabindex': 1,
        'jsx-a11y/tabindex-no-positive': 1,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'func-names': 0,
        'require-await': 2,
        'no-constant-condition': 2,
        'react/state-in-constructor': [2, 'never'], // don't have to write boilerplate code without constructor
        'react/jsx-props-no-spreading': [
            2,
            {
                html: 'ignore',
            },
        ],
        'react/prop-types': 0
    },
    "env": {
        "browser": true,
    }
}