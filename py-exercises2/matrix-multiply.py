'''
attempting matrix multiplication
problem unsolved, code not working
'''

# initilization
matrix1 = [[2,2],[5,3]]
matrix2 = [[1,3],[2,4]]
matrixsum = []

for i in range(len(matrix1)):
	matrixsum.append([])
	for j in range(len(matrix1[i])):
		matrixsum[i].append(matrix1[i][j] * matrix2[i][j] + matrix1[i][j+1] * matrix2[i+1][j])

print(matrixsum)
