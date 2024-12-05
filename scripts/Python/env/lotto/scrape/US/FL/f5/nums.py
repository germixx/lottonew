# Step 2 
# # reverse numbers from file
with open('nums.txt') as file:
    lines = []
    updated = []
    for line in file:
        lines.append(line)

    for x in reversed(lines):
        print(x.strip('\n'))
        with open('numbs.txt', 'a') as the_file:
            the_file.write(x)