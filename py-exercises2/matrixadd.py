'''
attempting matrix addition
'''

# initilization
matrix1 = [[2,2],[5,3], [6,6], [9, 6]]
matrix2 = [[1,3],[2,4], [0, -1], [8, 15]]
matrixsum = []

for i in range(len(matrix1)):
	matrixsum.append([])
	for j in range(len(matrix1[i])):
		matrixsum[i].append(matrix1[i][j] + matrix2[i][j])

print(matrixsum)
