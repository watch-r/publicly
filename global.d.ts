// Tell TypeScript about imports of plain/global and module CSS files
declare module "*.css";
declare module "*.scss";
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
