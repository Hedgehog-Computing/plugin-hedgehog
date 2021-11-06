// Copy from https://hedgehog-lab.github.io/

let A = mat([[1, 2], [3, 4]])
let B = mat([[3, 4], [5, 6]])

print('A+B=\n' + (A + B))
print('A-B=\n' + (A - B))
print('A*B=\n' + (A * B))
print('A/B=\n' + (A / B))
print('A^3=\n' + (A ^ 3))
print('A^(-1)=\n' + (A ^ (-1)))
print('A + [[1,1],[1,1]]=\n' + (A + [[1, 1], [1, 1]]))

// If the right operands are scalar, operator will do element-wise operation (or "dot operation" in Matlab)
print('A+1=\n' + (A + 1))
print('A-1=\n' + (A - 1))
print('A*3=\n' + (A * 3))
print('A/2=\n' + (A / 2))

// For element-wise multiplication (the same as A.*B in Matlab), use operator '**' instead
print('A**A=\n' + (A ** A))

// and if the right operand of operator "**" is a number N, it will generate an element-wise
// power of N to the left operand matrix (the same as A.^N in Matlab)
print('A**2=\n' + A ** 2)

// Also operator '===' can also be used to compare if two matrix are the same at element-wise
let A1 = mat([[1, 2], [3, 4]])
if (A1 === A) {
  print('A1 equals to A')
} else {
  print('A1 does not equal to A')
}

// Also you can use both of them as an expression in Matlab-style
let C = (A.T() * B) + (B * 4 - A + 1) * (B ^ (-1))
print('Matrix C (A\'*B + (B*4 - A + 1) * (B^(-1)) is\n' + C)
