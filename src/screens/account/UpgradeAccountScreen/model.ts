export interface AccountPackage {
  id: number;
  value: string;
  price: string;
  package_type: number;
  function: number[];
}

export interface PackageFunction {
  id: number;
  value: string;
  type: number;
}

export interface Package extends AccountPackage {
  feature: string[];
}

export const generateListAccountPackage = (
  accountPackage: AccountPackage[],
  packageFunction: PackageFunction[]
) => {
  let result: Package[] = [];
  let packages = [...accountPackage];
  packages.forEach(element => {
    let tempFunc = packageFunction.filter(item =>
      element.function.includes(item.id)
    );
    result.push({ ...element, feature: tempFunc.map(item => item.value) });
  });
  return result;
};
