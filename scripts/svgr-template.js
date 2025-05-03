function template({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) {
    const plugins = ['typescript', 'jsx'];
    const tpl_engine = template.smart({ plugins });

    // Define the interface extending SVGProps and adding size/color
    const iconPropsInterface = tpl_engine.ast`interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
  }`;

    // Modify the JSX to apply size/color props
    const modifiedJsx = {
        ...jsx,
        openingElement: {
            ...jsx.openingElement,
            attributes: [
                ...jsx.openingElement.attributes,
                tpl_engine.ast`width={size}`.expression,
                tpl_engine.ast`height={size}`.expression,
                tpl_engine.ast`fill={color}`.expression, // Assuming fill is primary
            ],
        },
    };

    // Create the component using forwardRef
    const component = tpl_engine.ast`
    const ${componentName} = React.forwardRef<SVGSVGElement, IconProps>(
      ({ color = 'currentColor', size = 24, ...props }, ref) => (
        React.cloneElement(${modifiedJsx}, { ...props, ref })
      )
    );
  `;

    return tpl_engine.ast`
    ${imports}
    import React from 'react';
    ${iconPropsInterface}
    ${component}
    ${exports}
  `;
}

module.exports = template; 