# Merge Sort

Input: [38, 27, 43, 3, 9, 82, 10]
Step 1: Divide the input list into two sub-lists: [38, 27, 43, 3] and [9, 82, 10]
Step 2: Recursively sort the two sub-lists using Merge Sort:

Sort [38, 27, 43, 3]:
Divide into [38, 27] and [43, 3]
Recursively sort [38, 27] into [27, 38]
Recursively sort [43, 3] into [3, 43]
Merge [27, 38] and [3, 43] into [3, 27, 38, 43]
Sort [9, 82, 10]:
Divide into [9] and [82, 10]
Recursively sort [82, 10] into [10, 82]
Merge [9] and [10, 82] into [9, 10, 82]
Step 3: Merge the sorted sub-lists [3, 27, 38, 43] and [9, 10, 82] into the final sorted list: [3, 9, 10, 27, 38, 43, 82]
Step 4: Return the merged and sorted list: [3, 9, 10, 27, 38, 43, 82]
