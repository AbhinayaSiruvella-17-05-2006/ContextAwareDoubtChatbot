export const courses = [
  {
    id: "photosynthesis",
    title: "Photosynthesis & Plant Biology",
    description: "Explore how plants convert sunlight into energy through the fascinating process of photosynthesis.",
    duration: "25 min",
    lessons: 4,
    category: "Biology",
    sections: [
      {
        id: "intro",
        title: "Introduction to Photosynthesis",
        content:
          "Photosynthesis is arguably the most important biological process on Earth. It is the means by which plants, algae, and certain bacteria convert light energy, usually from the sun, into chemical energy in the form of glucose.\n\nThis process not only provides the energy that sustains the plant but also produces oxygen as a byproduct — the very oxygen that most living organisms depend on for survival. Without photosynthesis, life as we know it would not exist.",
      },
      {
        id: "light-reactions",
        title: "Light-Dependent Reactions",
        content:
          "The light-dependent reactions occur in the thylakoid membranes of the chloroplasts. When chlorophyll absorbs photons of light, it excites electrons to a higher energy state. These high-energy electrons are then passed along an electron transport chain.\n\nDuring this process, water molecules are split (photolysis), releasing oxygen gas. The energy from the electron transport chain is used to pump hydrogen ions across the thylakoid membrane, creating a concentration gradient that drives ATP synthesis through chemiosmosis. NADPH is also produced as a carrier of high-energy electrons.",
      },
      {
        id: "calvin-cycle",
        title: "The Calvin Cycle",
        content:
          "The Calvin Cycle, also known as the light-independent reactions, takes place in the stroma of the chloroplast. This cycle uses the ATP and NADPH produced during the light-dependent reactions to fix carbon dioxide into organic molecules.\n\nThe cycle begins when the enzyme RuBisCO catalyzes the fixation of CO₂ to a five-carbon sugar called RuBP (ribulose-1,5-bisphosphate). Through a series of reactions, the resulting six-carbon compound is converted into G3P (glyceraldehyde-3-phosphate), which can be used to build glucose and other carbohydrates.",
      },
      {
        id: "factors",
        title: "Factors Affecting Photosynthesis",
        content:
          "Several environmental factors influence the rate of photosynthesis. Light intensity is perhaps the most obvious — as light increases, so does the rate of photosynthesis, up to a saturation point.\n\nTemperature affects the enzymes involved in photosynthesis. Most plants photosynthesize optimally between 25-35°C. Carbon dioxide concentration is another limiting factor; increasing CO₂ levels generally increases the rate until other factors become limiting. Water availability is crucial since water is a raw material for the light reactions.",
      },
    ],
  },
  {
    id: "newtons-laws",
    title: "Newton's Laws of Motion",
    description: "Understand the fundamental laws that govern how objects move and interact with forces.",
    duration: "30 min",
    lessons: 3,
    category: "Physics",
    sections: [
      {
        id: "first-law",
        title: "First Law — Inertia",
        content:
          "Newton's First Law of Motion, often called the Law of Inertia, states that an object at rest will remain at rest, and an object in motion will continue moving at a constant velocity in a straight line, unless acted upon by a net external force.\n\nInertia is the tendency of an object to resist changes in its state of motion. The more mass an object has, the greater its inertia. This is why it's harder to push a heavy truck than a light bicycle — the truck has more inertia.",
      },
      {
        id: "second-law",
        title: "Second Law — Force & Acceleration",
        content:
          "Newton's Second Law establishes the relationship between force, mass, and acceleration: F = ma. This means the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n\nIn practical terms, if you double the force on an object, you double its acceleration. If you double the mass while keeping force constant, the acceleration is halved. This law is the foundation of classical mechanics and allows us to predict how objects will move under various forces.",
      },
      {
        id: "third-law",
        title: "Third Law — Action & Reaction",
        content:
          "Newton's Third Law states that for every action, there is an equal and opposite reaction. When object A exerts a force on object B, object B simultaneously exerts a force equal in magnitude but opposite in direction on object A.\n\nIt's important to note that these action-reaction force pairs act on different objects. A common example is a rocket: the rocket pushes exhaust gases downward (action), and the gases push the rocket upward (reaction). The forces are equal in magnitude but act on different objects.",
      },
    ],
  },
  {
    id: "algorithms-101",
    title: "Introduction to Algorithms",
    description: "Learn the building blocks of computer science — algorithms, complexity, and problem solving.",
    duration: "35 min",
    lessons: 4,
    category: "Computer Science",
    sections: [
      {
        id: "what-is",
        title: "What is an Algorithm?",
        content:
          "An algorithm is a finite sequence of well-defined instructions used to solve a class of problems or to perform a computation. Algorithms are the foundation of computer programming and computational thinking.\n\nKey properties of an algorithm include: finiteness (it must terminate after a finite number of steps), definiteness (each step must be precisely defined), input (it can have zero or more inputs), output (it must produce at least one output), and effectiveness (each step must be basic enough to be carried out).",
      },
      {
        id: "complexity",
        title: "Time & Space Complexity",
        content:
          "Understanding the efficiency of algorithms is crucial. Time complexity describes how the runtime of an algorithm grows as the input size increases. Space complexity describes how much memory an algorithm uses.\n\nWe use Big O notation to express these complexities. Common complexities include O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, and O(2ⁿ) exponential. Choosing an algorithm with better complexity can make the difference between a program that runs in seconds and one that runs for years.",
      },
      {
        id: "sorting",
        title: "Sorting Algorithms",
        content:
          "Sorting is one of the most fundamental problems in computer science. Common sorting algorithms include Bubble Sort (O(n²)), Selection Sort (O(n²)), Insertion Sort (O(n²)), Merge Sort (O(n log n)), Quick Sort (O(n log n) average), and Heap Sort (O(n log n)).\n\nMerge Sort and Quick Sort are generally preferred for large datasets due to their superior time complexity. However, for small datasets or nearly sorted data, simpler algorithms like Insertion Sort can actually perform better due to lower constant factors and overhead.",
      },
      {
        id: "searching",
        title: "Searching Algorithms",
        content:
          "Searching algorithms are used to locate specific items within a data structure. Linear Search checks every element sequentially and works on unsorted data with O(n) time complexity.\n\nBinary Search is much more efficient with O(log n) time complexity but requires the data to be sorted. It works by repeatedly dividing the search interval in half. Hash-based searching using hash tables can achieve O(1) average-case time complexity, making it the fastest for lookups when properly implemented.",
      },
    ],
  },
  {
    id: "cell-biology",
    title: "Cell Structure & Function",
    description: "Dive into the microscopic world of cells — the fundamental units of life.",
    duration: "28 min",
    lessons: 3,
    category: "Biology",
    sections: [
      {
        id: "cell-overview",
        title: "Overview of Cells",
        content:
          "Cells are the basic structural and functional units of all living organisms. The cell theory states that all organisms are composed of cells, the cell is the basic unit of life, and all cells arise from pre-existing cells.\n\nThere are two main types of cells: prokaryotic cells (bacteria and archaea) which lack a membrane-bound nucleus, and eukaryotic cells (plants, animals, fungi) which have a defined nucleus and membrane-bound organelles.",
      },
      {
        id: "organelles",
        title: "Cell Organelles",
        content:
          "Eukaryotic cells contain numerous organelles, each with specific functions. The nucleus houses DNA and controls cell activities. Mitochondria are the powerhouses of the cell, producing ATP through cellular respiration.\n\nThe endoplasmic reticulum (ER) comes in two forms: rough ER (studded with ribosomes for protein synthesis) and smooth ER (involved in lipid synthesis). The Golgi apparatus packages and modifies proteins for secretion. Lysosomes contain digestive enzymes that break down waste materials.",
      },
      {
        id: "cell-division",
        title: "Cell Division",
        content:
          "Cell division is essential for growth, repair, and reproduction. Mitosis produces two identical daughter cells from a single parent cell and is used for growth and tissue repair. It involves prophase, metaphase, anaphase, and telophase.\n\nMeiosis is a specialized form of cell division that produces four genetically unique daughter cells with half the chromosome number. This process is crucial for sexual reproduction and generates genetic diversity through crossing over and independent assortment.",
      },
    ],
  },
  // ===== BTech CSE Subjects =====
  {
    id: "data-structures",
    title: "Data Structures",
    description: "Master arrays, linked lists, stacks, queues, trees, and graphs — the backbone of efficient programming.",
    duration: "45 min",
    lessons: 5,
    category: "Computer Science",
    sections: [
      {
        id: "arrays-lists",
        title: "Arrays & Linked Lists",
        content:
          "Arrays store elements in contiguous memory locations, providing O(1) random access via indexing. However, insertion and deletion require shifting elements, costing O(n) time. Static arrays have fixed size while dynamic arrays (like ArrayList or vector) resize automatically.\n\nLinked Lists use nodes connected by pointers. Each node stores data and a reference to the next node. Singly linked lists allow forward traversal, doubly linked lists allow bidirectional traversal. Insertion and deletion at known positions take O(1) time, but accessing the k-th element requires O(k) traversal.",
      },
      {
        id: "stacks-queues",
        title: "Stacks & Queues",
        content:
          "A Stack follows LIFO (Last In, First Out) order. Push adds to the top, Pop removes from the top — both O(1). Stacks are used in function call management (call stack), expression evaluation, undo operations, and backtracking algorithms like DFS.\n\nA Queue follows FIFO (First In, First Out) order. Enqueue adds to the rear, Dequeue removes from the front — both O(1) with proper implementation. Variations include Circular Queue (wraps around), Priority Queue (serves highest-priority first), and Deque (double-ended queue). Queues are essential for BFS, scheduling, and buffering.",
      },
      {
        id: "trees",
        title: "Trees & Binary Search Trees",
        content:
          "A Tree is a hierarchical data structure with a root node and children. Key terminology: root, parent, child, leaf, depth, height. A Binary Tree has at most two children per node.\n\nA Binary Search Tree (BST) maintains the property: left child < parent < right child. This enables O(log n) search, insert, and delete in balanced trees. However, a skewed BST degrades to O(n). Self-balancing BSTs like AVL Trees and Red-Black Trees guarantee O(log n) height by performing rotations after insertions and deletions.",
      },
      {
        id: "graphs",
        title: "Graphs & Representations",
        content:
          "A Graph G = (V, E) consists of vertices and edges. Graphs can be directed or undirected, weighted or unweighted, cyclic or acyclic. Common representations include Adjacency Matrix (O(V²) space, O(1) edge lookup) and Adjacency List (O(V+E) space, efficient for sparse graphs).\n\nGraph traversals: BFS (Breadth-First Search) uses a queue and explores level by level — useful for shortest path in unweighted graphs. DFS (Depth-First Search) uses a stack/recursion and explores as deep as possible — useful for topological sorting, cycle detection, and connected components.",
      },
      {
        id: "hashing",
        title: "Hashing & Hash Tables",
        content:
          "Hashing maps keys to indices using a hash function, enabling O(1) average-case lookups. A good hash function distributes keys uniformly and minimizes collisions. Common hash functions use modular arithmetic, multiplication method, or universal hashing.\n\nCollision resolution techniques: Chaining stores colliding elements in a linked list at each index. Open Addressing probes for the next empty slot — linear probing, quadratic probing, or double hashing. Load factor (n/m) affects performance; rehashing is triggered when it exceeds a threshold. Hash tables power dictionaries, sets, caches, and database indexing.",
      },
    ],
  },
  {
    id: "dbms",
    title: "Database Management Systems",
    description: "Learn relational databases, SQL, normalization, transactions, and indexing from the ground up.",
    duration: "40 min",
    lessons: 5,
    category: "Computer Science",
    sections: [
      {
        id: "rdbms-intro",
        title: "Introduction to RDBMS",
        content:
          "A Database Management System (DBMS) is software that manages databases. A Relational DBMS (RDBMS) organizes data into tables (relations) with rows (tuples) and columns (attributes). Each table has a schema defining column names and data types.\n\nKey concepts: Primary Key uniquely identifies each row. Foreign Key references a primary key in another table, establishing relationships. Candidate keys are minimal super keys. RDBMS examples include MySQL, PostgreSQL, Oracle, and SQL Server. The relational model, proposed by E.F. Codd in 1970, provides mathematical foundations through relational algebra.",
      },
      {
        id: "sql",
        title: "SQL — Structured Query Language",
        content:
          "SQL is divided into DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE; DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE; DCL (Data Control Language): GRANT, REVOKE; and TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT.\n\nJoins combine rows from two or more tables: INNER JOIN returns matching rows, LEFT JOIN returns all left rows plus matches, RIGHT JOIN returns all right rows plus matches, FULL OUTER JOIN returns all rows. Subqueries can be correlated or uncorrelated. Aggregate functions (COUNT, SUM, AVG, MIN, MAX) work with GROUP BY and HAVING clauses.",
      },
      {
        id: "normalization",
        title: "Normalization",
        content:
          "Normalization reduces data redundancy and prevents anomalies (insertion, update, deletion). 1NF requires atomic values — no repeating groups. 2NF requires 1NF plus no partial dependencies (non-key attributes must depend on the entire primary key).\n\n3NF requires 2NF plus no transitive dependencies — non-key attributes must not depend on other non-key attributes. BCNF (Boyce-Codd Normal Form) is a stricter version where every determinant must be a candidate key. Denormalization is sometimes applied for performance in read-heavy systems, trading redundancy for speed.",
      },
      {
        id: "transactions",
        title: "Transactions & ACID Properties",
        content:
          "A transaction is a logical unit of work that must be executed completely or not at all. ACID properties ensure reliability: Atomicity — all or nothing; Consistency — database moves from one valid state to another; Isolation — concurrent transactions don't interfere; Durability — committed changes survive failures.\n\nConcurrency control mechanisms include Lock-Based Protocols (shared and exclusive locks, two-phase locking), Timestamp-Based Protocols, and Multiversion Concurrency Control (MVCC). Deadlocks occur when transactions wait circularly; they're handled by detection (wait-for graph) or prevention (wound-wait, wait-die schemes).",
      },
      {
        id: "indexing",
        title: "Indexing & Query Optimization",
        content:
          "Indexes speed up data retrieval by maintaining sorted references. Primary Index is built on the primary key. Secondary Index is built on non-key attributes. Dense indexes have entries for every record; sparse indexes have entries for some records only.\n\nB-Trees and B+ Trees are the most common index structures in databases. B+ Trees store all data in leaf nodes linked together, enabling efficient range queries. Hash indexes provide O(1) lookups for equality queries. Query optimization involves choosing the best execution plan using cost-based or rule-based approaches, considering join ordering, index selection, and access methods.",
      },
    ],
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    description: "Understand process management, memory management, file systems, and OS design principles.",
    duration: "50 min",
    lessons: 5,
    category: "Computer Science",
    sections: [
      {
        id: "os-intro",
        title: "Introduction to OS",
        content:
          "An Operating System is system software that manages hardware resources and provides services for application programs. It acts as an intermediary between users and computer hardware. Key functions include process management, memory management, file system management, I/O management, and security.\n\nTypes of OS: Batch OS (executes jobs in batches), Time-Sharing OS (multiple users share CPU time), Real-Time OS (guarantees response within deadlines), Distributed OS (manages multiple machines), and Embedded OS (runs on specialized hardware). Modern OS examples include Linux, Windows, macOS, Android, and iOS.",
      },
      {
        id: "processes",
        title: "Process Management",
        content:
          "A process is a program in execution with its own address space, program counter, registers, and stack. Process states include: New, Ready, Running, Waiting, and Terminated. The Process Control Block (PCB) stores process state, CPU registers, scheduling information, and memory management info.\n\nCPU Scheduling algorithms determine which process runs next. FCFS (First Come First Served) is simple but causes convoy effect. SJF (Shortest Job First) minimizes average waiting time but requires future knowledge. Round Robin gives each process a fixed time quantum — good for time-sharing. Priority Scheduling serves highest priority first but may cause starvation, solved by aging.",
      },
      {
        id: "synchronization",
        title: "Process Synchronization",
        content:
          "When multiple processes access shared resources, synchronization prevents race conditions. The Critical Section problem requires three properties: Mutual Exclusion (only one process in CS at a time), Progress (if no one is in CS, a waiting process should enter), and Bounded Waiting (no starvation).\n\nSolutions include Mutex Locks (binary lock), Semaphores (counting and binary — P/wait and V/signal operations), and Monitors (high-level synchronization construct). Classic problems: Producer-Consumer (bounded buffer), Readers-Writers (concurrent reads, exclusive writes), and Dining Philosophers (resource ordering to prevent deadlock).",
      },
      {
        id: "memory-mgmt",
        title: "Memory Management",
        content:
          "Memory management allocates and deallocates memory for processes. Contiguous allocation assigns a single block — simple but causes external fragmentation. Paging divides memory into fixed-size frames and logical memory into pages of the same size, eliminating external fragmentation.\n\nVirtual Memory allows processes to use more memory than physically available through demand paging. Pages are loaded only when needed (lazy loading). Page Replacement algorithms handle page faults: FIFO (simple, suffers Belady's anomaly), LRU (Least Recently Used — good performance), and Optimal (replaces page used farthest in future — theoretical benchmark). Thrashing occurs when excessive paging degrades performance.",
      },
      {
        id: "deadlocks",
        title: "Deadlocks",
        content:
          "Deadlock occurs when processes hold resources while waiting for others, forming a circular wait. Four necessary conditions (Coffman conditions): Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. If any one is prevented, deadlock cannot occur.\n\nHandling strategies: Prevention (eliminate one Coffman condition), Avoidance (Banker's Algorithm — check safe state before granting resources), Detection (build wait-for graph, detect cycles), and Recovery (terminate processes or preempt resources). The Banker's Algorithm maintains available, max, allocation, and need matrices to determine safe sequences.",
      },
    ],
  },
  {
    id: "computer-networks",
    title: "Computer Networks",
    description: "Explore the OSI model, TCP/IP, routing, and how the internet actually works.",
    duration: "45 min",
    lessons: 5,
    category: "Computer Science",
    sections: [
      {
        id: "network-models",
        title: "OSI & TCP/IP Models",
        content:
          "The OSI (Open Systems Interconnection) model has 7 layers: Physical (bits over medium), Data Link (frames, MAC addressing, error detection), Network (packets, IP addressing, routing), Transport (segments, end-to-end delivery), Session (connection management), Presentation (data translation, encryption), and Application (user interfaces, HTTP, FTP, SMTP).\n\nThe TCP/IP model has 4 layers: Network Access (combines Physical + Data Link), Internet (Network layer — IP), Transport (TCP/UDP), and Application (combines Session + Presentation + Application). TCP/IP is the practical model used on the internet, while OSI serves as a reference framework for understanding networking concepts.",
      },
      {
        id: "tcp-udp",
        title: "TCP vs UDP",
        content:
          "TCP (Transmission Control Protocol) is connection-oriented and reliable. It uses a 3-way handshake (SYN, SYN-ACK, ACK) to establish connections. Features include ordered delivery, error checking, flow control (sliding window), and congestion control (slow start, congestion avoidance, fast retransmit).\n\nUDP (User Datagram Protocol) is connectionless and unreliable but faster with lower overhead. No handshake, no ordering, no retransmission. UDP is preferred for real-time applications: video streaming, VoIP, online gaming, and DNS queries. Port numbers identify applications — well-known ports (0-1023), registered (1024-49151), and dynamic (49152-65535).",
      },
      {
        id: "ip-addressing",
        title: "IP Addressing & Subnetting",
        content:
          "IPv4 addresses are 32-bit numbers, written as four octets (e.g., 192.168.1.1). Classes: A (1-126, /8), B (128-191, /16), C (192-223, /24), D (multicast), E (reserved). Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.\n\nSubnetting divides a network into smaller subnets using a subnet mask. CIDR (Classless Inter-Domain Routing) replaced classful addressing, allowing variable-length subnet masks. Example: 192.168.1.0/26 gives 64 addresses per subnet (62 usable). IPv6 uses 128-bit addresses written in hexadecimal, solving the IPv4 exhaustion problem with approximately 3.4 × 10³⁸ addresses.",
      },
      {
        id: "routing",
        title: "Routing Algorithms",
        content:
          "Routing determines the best path for data packets. Distance Vector routing (e.g., RIP) uses Bellman-Ford algorithm — each router shares its distance table with neighbors. Suffers from count-to-infinity problem, mitigated by split horizon and poison reverse.\n\nLink State routing (e.g., OSPF) uses Dijkstra's algorithm — each router builds a complete network topology map. Faster convergence but higher memory usage. BGP (Border Gateway Protocol) is the path vector protocol used for inter-domain routing on the internet. NAT (Network Address Translation) maps private to public IP addresses, conserving IPv4 addresses.",
      },
      {
        id: "application-protocols",
        title: "Application Layer Protocols",
        content:
          "HTTP (HyperText Transfer Protocol) is the foundation of the web. HTTP/1.1 uses persistent connections. HTTP/2 introduces multiplexing, header compression, and server push. HTTP/3 uses QUIC over UDP for faster connections. Methods: GET, POST, PUT, DELETE, PATCH.\n\nDNS (Domain Name System) translates domain names to IP addresses using a hierarchical system: root servers → TLD servers → authoritative servers. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses. FTP (File Transfer Protocol) handles file transfers. SMTP/POP3/IMAP handle email sending and retrieval. TLS/SSL provides encryption for secure communication (HTTPS).",
      },
    ],
  },
  {
    id: "oops-concepts",
    title: "Object-Oriented Programming",
    description: "Master encapsulation, inheritance, polymorphism, and abstraction with real-world examples.",
    duration: "35 min",
    lessons: 4,
    category: "Computer Science",
    sections: [
      {
        id: "encapsulation",
        title: "Encapsulation",
        content:
          "Encapsulation bundles data (attributes) and methods (functions) that operate on the data into a single unit — the class. Access modifiers control visibility: private (accessible only within the class), protected (accessible within the class and subclasses), and public (accessible everywhere).\n\nGetters and setters provide controlled access to private fields, allowing validation before modification. Data hiding prevents external code from directly manipulating internal state, reducing bugs and improving maintainability. Example: a BankAccount class keeps balance private and exposes deposit() and withdraw() methods with validation.",
      },
      {
        id: "inheritance",
        title: "Inheritance",
        content:
          "Inheritance allows a class (child/derived) to inherit properties and methods from another class (parent/base), promoting code reuse. Types include: Single inheritance (one parent), Multilevel inheritance (chain of parents), Hierarchical inheritance (multiple children from one parent), and Multiple inheritance (multiple parents — supported in C++ but not Java, which uses interfaces instead).\n\nMethod overriding allows a child class to provide a specific implementation of a method already defined in the parent. The 'super' keyword (or equivalent) calls the parent's version. The Liskov Substitution Principle states that objects of a subclass should be usable wherever the parent class is expected without altering correctness.",
      },
      {
        id: "polymorphism",
        title: "Polymorphism",
        content:
          "Polymorphism means 'many forms' — the same interface behaves differently based on the object. Compile-time polymorphism (static binding) is achieved through method overloading (same name, different parameters) and operator overloading.\n\nRuntime polymorphism (dynamic binding) is achieved through method overriding with virtual functions. When a base class pointer/reference calls an overridden method, the derived class's version executes. This is powered by a vtable (virtual table) mechanism. Example: a Shape reference can point to Circle, Rectangle, or Triangle — calling area() invokes the correct implementation for each shape.",
      },
      {
        id: "abstraction",
        title: "Abstraction & Interfaces",
        content:
          "Abstraction hides complex implementation details and shows only essential features. Abstract classes cannot be instantiated and may contain abstract methods (declared but not defined) that subclasses must implement. They can also have concrete methods with implementations.\n\nInterfaces define a contract — a set of method signatures that implementing classes must fulfill. In Java, a class can implement multiple interfaces (solving the diamond problem of multiple inheritance). SOLID principles build on OOP: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion — guiding robust, maintainable design.",
      },
    ],
  },
  {
    id: "digital-logic",
    title: "Digital Logic Design",
    description: "Learn Boolean algebra, logic gates, combinational and sequential circuits.",
    duration: "35 min",
    lessons: 4,
    category: "Electronics",
    sections: [
      {
        id: "boolean-algebra",
        title: "Boolean Algebra & Logic Gates",
        content:
          "Boolean algebra operates on binary values (0 and 1) using three basic operations: AND (·), OR (+), and NOT ('). Basic gates: AND gate outputs 1 only when all inputs are 1. OR gate outputs 1 when at least one input is 1. NOT gate inverts the input.\n\nDerived gates: NAND (NOT-AND) and NOR (NOT-OR) are universal gates — any circuit can be built using only NAND or only NOR gates. XOR outputs 1 when inputs differ. XNOR outputs 1 when inputs match. Important laws: De Morgan's Theorems: (A·B)' = A'+B' and (A+B)' = A'·B'. Boolean identities help simplify complex expressions.",
      },
      {
        id: "kmap",
        title: "Karnaugh Maps",
        content:
          "Karnaugh Maps (K-maps) provide a visual method for simplifying Boolean expressions. Each cell represents a minterm, arranged so adjacent cells differ by exactly one variable (Gray code ordering). Groups of 1s are circled in powers of 2 (1, 2, 4, 8...).\n\nFor a 4-variable K-map: rows represent two variables, columns represent two. Simplification rules — group as large as possible, groups can wrap around edges, each 1 must be in at least one group. Sum of Products (SOP) groups 1s for the simplified function. Product of Sums (POS) groups 0s. Don't care conditions (X) can be treated as 0 or 1 to maximize group sizes.",
      },
      {
        id: "combinational",
        title: "Combinational Circuits",
        content:
          "Combinational circuits produce outputs based solely on current inputs — no memory. Half Adder adds two bits producing Sum (A⊕B) and Carry (A·B). Full Adder adds three bits (including carry-in). Ripple Carry Adder chains full adders but has propagation delay.\n\nMultiplexer (MUX) selects one of 2ⁿ inputs using n select lines — acts as a universal function generator. Demultiplexer (DEMUX) routes one input to one of 2ⁿ outputs. Encoder converts 2ⁿ inputs to n-bit code. Decoder converts n-bit code to 2ⁿ outputs. These building blocks form the basis of ALUs, data selectors, and address decoders in processors.",
      },
      {
        id: "sequential",
        title: "Sequential Circuits",
        content:
          "Sequential circuits have memory — outputs depend on current inputs AND past states. Flip-flops are the basic memory elements. SR Flip-Flop (Set-Reset), D Flip-Flop (stores data on clock edge), JK Flip-Flop (like SR but toggles on J=K=1), and T Flip-Flop (toggles on T=1).\n\nRegisters are groups of flip-flops storing multi-bit data. Shift registers move data left/right — SISO, SIPO, PISO, PIPO. Counters count clock pulses: Asynchronous (ripple) counters are simple but slow, Synchronous counters are faster as all flip-flops share the same clock. State machines (Mealy and Moore) model sequential behavior — Mealy outputs depend on state and input, Moore outputs depend only on state.",
      },
    ],
  },
  {
    id: "discrete-math",
    title: "Discrete Mathematics",
    description: "Study sets, relations, graph theory, combinatorics, and mathematical logic for CS.",
    duration: "40 min",
    lessons: 4,
    category: "Mathematics",
    sections: [
      {
        id: "sets-relations",
        title: "Sets & Relations",
        content:
          "A set is an unordered collection of distinct objects. Operations: Union (A∪B), Intersection (A∩B), Difference (A-B), Complement (A'), Symmetric Difference (A△B). Power Set P(A) contains all subsets — |P(A)| = 2ⁿ for a set with n elements.\n\nA relation R from set A to set B is a subset of A×B. Properties of relations on a set: Reflexive (aRa for all a), Symmetric (aRb implies bRa), Transitive (aRb and bRc implies aRc), Antisymmetric (aRb and bRa implies a=b). An equivalence relation is reflexive, symmetric, and transitive — it partitions the set into equivalence classes.",
      },
      {
        id: "graph-theory",
        title: "Graph Theory",
        content:
          "A graph G = (V, E) has vertices and edges. Degree of a vertex is the number of edges incident on it. Handshaking lemma: sum of all degrees = 2|E|. Types: Complete graph (Kn), Bipartite graph, Planar graph (can be drawn without edge crossings).\n\nEuler's formula for connected planar graphs: V - E + F = 2. An Euler path visits every edge exactly once (exists if exactly 0 or 2 odd-degree vertices). A Hamiltonian path visits every vertex exactly once (NP-complete to determine). Graph coloring assigns colors to vertices so no adjacent vertices share a color — chromatic number χ(G) is the minimum colors needed.",
      },
      {
        id: "combinatorics",
        title: "Combinatorics & Counting",
        content:
          "Permutation is an arrangement where order matters: P(n,r) = n!/(n-r)!. Combination is a selection where order doesn't matter: C(n,r) = n!/[r!(n-r)!]. The Multiplication Principle: if task A has m ways and task B has n ways, both can be done in m×n ways.\n\nPigeonhole Principle: if n items go into m containers and n > m, at least one container has more than one item. Inclusion-Exclusion Principle: |A∪B| = |A| + |B| - |A∩B|. The Binomial Theorem: (x+y)ⁿ = Σ C(n,k) xⁿ⁻ᵏ yᵏ. Recurrence relations define sequences recursively; solved by characteristic equations, generating functions, or the Master theorem.",
      },
      {
        id: "logic",
        title: "Propositional & Predicate Logic",
        content:
          "Propositional logic deals with statements that are true or false. Connectives: AND (∧), OR (∨), NOT (¬), Implication (→), Biconditional (↔). A tautology is always true; a contradiction is always false; a contingency is neither.\n\nPredicate logic extends propositional logic with quantifiers: Universal (∀ — for all) and Existential (∃ — there exists). Logical equivalences: De Morgan's laws, Contrapositive (p→q ≡ ¬q→¬p), Double negation. Proof techniques: Direct proof, Proof by contradiction, Proof by contrapositive, Mathematical induction (base case + inductive step). These form the foundation of formal verification and program correctness.",
      },
    ],
  },
  {
    id: "thermodynamics",
    title: "Engineering Thermodynamics",
    description: "Study heat, work, energy, and the laws that govern energy transformations.",
    duration: "40 min",
    lessons: 4,
    category: "Mechanical",
    sections: [
      {
        id: "thermo-basics",
        title: "Basic Concepts & Definitions",
        content:
          "Thermodynamics studies energy and its transformations. A System is the region under study; Surroundings are everything outside. Systems can be Open (mass and energy cross boundary), Closed (only energy crosses), or Isolated (nothing crosses).\n\nProperties describe the state of a system: Intensive properties (temperature, pressure, density) are independent of mass; Extensive properties (volume, energy, entropy) depend on mass. State functions depend only on current state, not the path taken. Equilibrium means no tendency for change — thermal, mechanical, phase, and chemical equilibrium must all hold.",
      },
      {
        id: "first-law",
        title: "First Law of Thermodynamics",
        content:
          "The First Law is the law of energy conservation: energy can be neither created nor destroyed, only transformed. For a closed system: ΔU = Q - W, where ΔU is change in internal energy, Q is heat added to the system, and W is work done by the system.\n\nFor an open system (control volume): the energy equation includes flow energy (PV work), kinetic energy, and potential energy. Enthalpy H = U + PV is a useful property for flow processes. Specific heats at constant pressure (Cp) and constant volume (Cv) relate heat addition to temperature change. For ideal gases: Cp - Cv = R.",
      },
      {
        id: "second-law",
        title: "Second Law & Entropy",
        content:
          "The Second Law establishes the direction of natural processes. Kelvin-Planck statement: no heat engine can convert all heat into work. Clausius statement: heat cannot spontaneously flow from cold to hot body. Both are equivalent.\n\nEntropy (S) is a measure of disorder or randomness. For reversible processes: dS = δQ/T. For irreversible processes: dS > δQ/T. The entropy of the universe always increases (or remains constant for reversible processes). Carnot efficiency η = 1 - T_cold/T_hot represents the maximum possible efficiency of any heat engine operating between two temperature reservoirs.",
      },
      {
        id: "cycles",
        title: "Power & Refrigeration Cycles",
        content:
          "The Carnot Cycle is the most efficient theoretical cycle: two isothermal and two adiabatic processes. Real engines approximate it with practical cycles. The Otto Cycle (spark-ignition engines) has two isochoric and two adiabatic processes — efficiency depends on compression ratio.\n\nThe Diesel Cycle (compression-ignition engines) replaces the constant-volume heat addition with constant-pressure heat addition. The Rankine Cycle is used in steam power plants: pump → boiler → turbine → condenser. The Vapor Compression Refrigeration Cycle reverses the heat engine: compressor → condenser → expansion valve → evaporator. COP (Coefficient of Performance) measures refrigeration efficiency.",
      },
    ],
  },
  {
    id: "signals-systems",
    title: "Signals & Systems",
    description: "Analyze continuous and discrete signals, LTI systems, Fourier and Laplace transforms.",
    duration: "40 min",
    lessons: 4,
    category: "Electronics",
    sections: [
      {
        id: "signal-types",
        title: "Signal Classification",
        content:
          "A signal is a function that conveys information. Continuous-time signals are defined for all time values; discrete-time signals exist only at integer time indices. Analog signals take continuous amplitude values; digital signals take discrete amplitude values.\n\nImportant signal types: Unit Step u(t) = 1 for t≥0, Unit Impulse δ(t) is zero everywhere except at t=0 with unit area, Exponential signal e^(st), and Sinusoidal signal A·cos(ωt+φ). Signals can be classified as deterministic vs random, periodic vs aperiodic, even vs odd, and energy vs power signals. The sifting property of impulse: ∫x(t)δ(t-t₀)dt = x(t₀).",
      },
      {
        id: "lti-systems",
        title: "LTI Systems & Convolution",
        content:
          "A system is Linear if it satisfies superposition (additivity + homogeneity). A system is Time-Invariant if a time shift in input causes the same time shift in output. LTI systems are completely characterized by their impulse response h(t).\n\nConvolution y(t) = x(t) * h(t) = ∫x(τ)h(t-τ)dτ gives the output for any input. Properties: commutative, associative, distributive. For discrete-time LTI systems: y[n] = x[n] * h[n] = Σ x[k]h[n-k]. BIBO stability requires Σ|h[n]| < ∞. Causality requires h[n] = 0 for n < 0.",
      },
      {
        id: "fourier",
        title: "Fourier Transform",
        content:
          "The Fourier Series represents periodic signals as a sum of harmonically related sinusoids: x(t) = Σ cₙ e^(jnω₀t). The coefficients cₙ = (1/T)∫x(t)e^(-jnω₀t)dt reveal the frequency content.\n\nThe Fourier Transform extends this to aperiodic signals: X(ω) = ∫x(t)e^(-jωt)dt. Important properties: linearity, time shifting → phase shift, convolution in time → multiplication in frequency, Parseval's theorem (energy conservation). The Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT) are used for computational spectral analysis. FFT reduces complexity from O(N²) to O(N log N).",
      },
      {
        id: "laplace",
        title: "Laplace & Z-Transform",
        content:
          "The Laplace Transform X(s) = ∫x(t)e^(-st)dt, where s = σ+jω, generalizes the Fourier Transform by adding a real component. It converts differential equations into algebraic equations. The Region of Convergence (ROC) determines signal properties (causal, stable).\n\nTransfer Function H(s) = Y(s)/X(s) characterizes LTI systems. Poles and zeros of H(s) determine system behavior: poles in left half-plane → stable, right half-plane → unstable. The Z-Transform is the discrete-time equivalent: X(z) = Σ x[n]z⁻ⁿ. It converts difference equations to algebraic form. Pole-zero analysis in the z-plane: poles inside unit circle → stable system.",
      },
    ],
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    description: "Study matrices, vector spaces, eigenvalues, and transformations essential for engineering.",
    duration: "35 min",
    lessons: 4,
    category: "Mathematics",
    sections: [
      {
        id: "matrices",
        title: "Matrices & Determinants",
        content:
          "A matrix is a rectangular array of numbers arranged in rows and columns. Operations: Addition (element-wise), Scalar multiplication, Matrix multiplication (AB)ᵢⱼ = Σ aᵢₖbₖⱼ — note AB ≠ BA in general. Special matrices: Identity (I), Diagonal, Symmetric (A = Aᵀ), Skew-symmetric (A = -Aᵀ), Orthogonal (AAᵀ = I).\n\nDeterminant is a scalar computed from a square matrix. Properties: det(AB) = det(A)·det(B), det(Aᵀ) = det(A), swapping rows changes sign. A matrix is invertible iff det(A) ≠ 0. Inverse: A⁻¹ = adj(A)/det(A). Cramer's rule solves linear systems using determinants. Row reduction (Gaussian elimination) transforms matrices to row echelon form for solving systems.",
      },
      {
        id: "vector-spaces",
        title: "Vector Spaces & Subspaces",
        content:
          "A vector space V over a field F satisfies closure under addition and scalar multiplication, plus associativity, commutativity, identity, and inverse axioms. Examples: Rⁿ, polynomial spaces, function spaces.\n\nLinear independence: vectors v₁,...,vₖ are independent if c₁v₁+...+cₖvₖ = 0 implies all cᵢ = 0. A basis is a maximal linearly independent set that spans the space. Dimension is the number of basis vectors. Rank of a matrix = dimension of column space = dimension of row space. Rank-Nullity theorem: rank(A) + nullity(A) = n (number of columns).",
      },
      {
        id: "eigenvalues",
        title: "Eigenvalues & Eigenvectors",
        content:
          "For a square matrix A, if Av = λv for some non-zero vector v, then λ is an eigenvalue and v is the corresponding eigenvector. Eigenvalues are found by solving det(A - λI) = 0, called the characteristic equation.\n\nProperties: trace(A) = Σλᵢ, det(A) = Πλᵢ. Symmetric matrices have real eigenvalues and orthogonal eigenvectors. Diagonalization: A = PDP⁻¹ where D is diagonal with eigenvalues and P has eigenvectors as columns — possible iff A has n linearly independent eigenvectors. Cayley-Hamilton theorem: every matrix satisfies its own characteristic equation.",
      },
      {
        id: "transformations",
        title: "Linear Transformations",
        content:
          "A linear transformation T: V → W satisfies T(αu + βv) = αT(u) + βT(v). Every linear transformation from Rⁿ to Rᵐ can be represented by an m×n matrix. Common transformations: rotation, reflection, scaling, shearing, projection.\n\nKernel (null space) of T = {v : T(v) = 0}; Image (range) of T = {T(v) : v ∈ V}. Dimension theorem: dim(ker T) + dim(im T) = dim(V). Similar matrices (B = P⁻¹AP) represent the same transformation in different bases. Singular Value Decomposition (SVD): A = UΣVᵀ — used in data compression, PCA, and pseudoinverse computation.",
      },
    ],
  },
  {
    id: "compiler-design",
    title: "Compiler Design",
    description: "Understand lexical analysis, parsing, syntax-directed translation, and code generation.",
    duration: "40 min",
    lessons: 4,
    category: "Computer Science",
    sections: [
      {
        id: "compiler-phases",
        title: "Phases of a Compiler",
        content:
          "A compiler translates high-level source code to machine code through multiple phases. Lexical Analysis (scanner) converts character stream into tokens using regular expressions and finite automata. Syntax Analysis (parser) checks grammatical structure using context-free grammars.\n\nSemantic Analysis checks type compatibility and scope rules. Intermediate Code Generation produces a platform-independent representation (three-address code, abstract syntax tree). Code Optimization improves efficiency without changing functionality. Code Generation produces target machine code. Symbol Table management stores identifiers and their attributes across all phases.",
      },
      {
        id: "lexical",
        title: "Lexical Analysis",
        content:
          "The lexer reads source characters and groups them into tokens: identifiers, keywords, operators, literals, delimiters. Regular expressions define token patterns. A Nondeterministic Finite Automaton (NFA) is constructed from the regex, then converted to a Deterministic Finite Automaton (DFA) using subset construction.\n\nDFA minimization reduces states while preserving behavior. Tools like Lex/Flex automate lexer generation from regex specifications. The lexer also handles whitespace removal, comment stripping, and line number tracking. Longest match rule: when multiple patterns match, choose the longest. For ties, use priority ordering.",
      },
      {
        id: "parsing",
        title: "Syntax Analysis & Parsing",
        content:
          "Parsing verifies the syntactic structure of token sequences against a Context-Free Grammar (CFG). A CFG has terminals, non-terminals, productions, and a start symbol. Derivation can be leftmost or rightmost.\n\nTop-down parsers (LL parsers) build the parse tree from root to leaves. Recursive descent and LL(1) parsers use FIRST and FOLLOW sets to make parsing decisions. Bottom-up parsers (LR parsers) build from leaves to root — more powerful. Types: SLR, LALR (used by YACC/Bison), and canonical LR. LR parsers use shift-reduce actions with a parsing table. Ambiguous grammars have multiple parse trees for the same string and must be rewritten.",
      },
      {
        id: "code-optimization",
        title: "Code Optimization & Generation",
        content:
          "Code optimization improves performance and reduces resource usage. Local optimizations within basic blocks: constant folding (evaluate constants at compile time), common subexpression elimination, dead code elimination, and strength reduction (replace expensive operations with cheaper ones).\n\nGlobal optimizations across basic blocks: loop-invariant code motion (move computations outside loops), induction variable elimination, and global common subexpression elimination. Register allocation assigns variables to CPU registers using graph coloring — the register interference graph has edges between simultaneously live variables. Code generation maps intermediate code to target instructions, handling instruction selection, register assignment, and instruction scheduling.",
      },
    ],
  },
  {
    id: "engineering-math",
    title: "Engineering Mathematics",
    description: "Calculus, differential equations, and probability — the math backbone of engineering.",
    duration: "45 min",
    lessons: 4,
    category: "Mathematics",
    sections: [
      {
        id: "calculus",
        title: "Differential & Integral Calculus",
        content:
          "Differentiation measures rates of change. Key rules: Power rule d/dx(xⁿ) = nxⁿ⁻¹, Product rule d/dx(fg) = f'g + fg', Quotient rule, Chain rule d/dx(f(g(x))) = f'(g(x))·g'(x). Applications: finding maxima/minima, rate of change, tangent lines, Taylor series expansion.\n\nIntegration finds areas, volumes, and accumulated quantities. Fundamental Theorem of Calculus connects derivatives and integrals: ∫ₐᵇ f(x)dx = F(b) - F(a). Techniques: substitution, integration by parts (∫udv = uv - ∫vdu), partial fractions, trigonometric substitution. Multiple integrals: double integrals for area/volume, triple integrals for volumes in 3D, and change of variables using Jacobians.",
      },
      {
        id: "ode",
        title: "Ordinary Differential Equations",
        content:
          "An ODE involves derivatives of a function with respect to one variable. First-order ODEs: Separable (∫dy/g(y) = ∫f(x)dx), Linear (dy/dx + P(x)y = Q(x) — use integrating factor e^(∫P dx)), Exact (M dx + N dy = 0 where ∂M/∂y = ∂N/∂x), and Bernoulli equations.\n\nSecond-order linear ODEs with constant coefficients: ay'' + by' + cy = 0. The characteristic equation ar² + br + c = 0 gives: distinct real roots → y = c₁e^(r₁x) + c₂e^(r₂x), repeated roots → y = (c₁ + c₂x)e^(rx), complex roots → y = e^(αx)(c₁cos βx + c₂sin βx). Non-homogeneous equations use variation of parameters or undetermined coefficients.",
      },
      {
        id: "probability",
        title: "Probability & Statistics",
        content:
          "Probability axioms: P(A) ≥ 0, P(S) = 1, P(A∪B) = P(A) + P(B) for mutually exclusive events. Conditional probability P(A|B) = P(A∩B)/P(B). Bayes' Theorem: P(A|B) = P(B|A)P(A)/P(B). Independent events: P(A∩B) = P(A)·P(B).\n\nRandom variables: Discrete (PMF) and Continuous (PDF). Expectation E[X] = Σ xP(x) or ∫xf(x)dx. Variance Var(X) = E[X²] - (E[X])². Common distributions: Binomial (n trials, success probability p), Poisson (rare events, λ parameter), Normal/Gaussian (bell curve, μ and σ²), Exponential (time between events). Central Limit Theorem: sample means approach normal distribution as sample size increases.",
      },
      {
        id: "numerical-methods",
        title: "Numerical Methods",
        content:
          "Numerical methods provide approximate solutions when analytical methods fail. Root finding: Bisection method (slow but guaranteed convergence), Newton-Raphson method (x_{n+1} = x_n - f(x_n)/f'(x_n) — fast but needs derivative and good initial guess), Secant method (approximates derivative).\n\nNumerical integration: Trapezoidal rule (linear approximation between points), Simpson's 1/3 rule (quadratic approximation — more accurate). Solving ODEs numerically: Euler's method (first-order, y_{n+1} = y_n + h·f(x_n, y_n)), Runge-Kutta methods (RK4 is widely used for its accuracy-efficiency balance). Numerical linear algebra: Gauss-Seidel and Jacobi iterative methods for solving large linear systems.",
      },
    ],
  },
  {
    id: "coa",
    title: "Computer Organization & Architecture",
    description: "Explore CPU design, instruction sets, pipelining, memory hierarchy, and I/O systems.",
    duration: "40 min",
    lessons: 4,
    category: "Computer Science",
    sections: [
      {
        id: "cpu-basics",
        title: "CPU Organization",
        content:
          "The CPU consists of the Arithmetic Logic Unit (ALU) for computations, the Control Unit (CU) for instruction decoding and sequencing, and Registers for fast temporary storage. The instruction cycle: Fetch (get instruction from memory), Decode (interpret opcode), Execute (perform operation), and Write Back (store result).\n\nInstruction Set Architecture (ISA) defines the interface between hardware and software. RISC (Reduced Instruction Set Computer) uses simple, uniform instructions — e.g., ARM, MIPS. CISC (Complex Instruction Set Computer) has rich, variable-length instructions — e.g., x86. RISC advantages: simpler hardware, easier pipelining. CISC advantages: fewer instructions per program, backward compatibility.",
      },
      {
        id: "pipelining",
        title: "Pipelining",
        content:
          "Pipelining overlaps execution of multiple instructions. A 5-stage pipeline: IF (Instruction Fetch), ID (Instruction Decode), EX (Execute), MEM (Memory Access), WB (Write Back). Throughput improves but latency per instruction stays the same.\n\nHazards reduce pipeline efficiency: Data hazards (dependencies between instructions — resolved by forwarding/bypassing, stalling), Control hazards (branches alter flow — resolved by branch prediction, delayed branching), Structural hazards (resource conflicts — resolved by adding hardware). Pipeline performance: CPI = 1 + stall cycles per instruction. Speedup approaches the number of stages for large instruction counts.",
      },
      {
        id: "memory-hierarchy",
        title: "Memory Hierarchy & Cache",
        content:
          "Memory hierarchy balances speed, size, and cost: Registers (fastest, smallest) → Cache → Main Memory (RAM) → Secondary Storage (SSD/HDD). Locality principles: Temporal locality (recently accessed data is likely accessed again), Spatial locality (nearby data is likely accessed soon).\n\nCache mapping: Direct Mapped (each block maps to exactly one cache line — fast but high conflict misses), Fully Associative (any block in any line — flexible but slow lookup), Set Associative (compromise — n-way sets). Cache write policies: Write-through (update cache and memory simultaneously) vs Write-back (update memory only on eviction). Replacement policies: LRU, FIFO, Random.",
      },
      {
        id: "io-systems",
        title: "I/O Organization",
        content:
          "I/O devices communicate with the CPU through I/O interfaces and buses. Programmed I/O: CPU polls device status — simple but wastes CPU cycles. Interrupt-Driven I/O: device signals CPU via interrupts — more efficient. Direct Memory Access (DMA): device transfers data directly to memory without CPU involvement — best for bulk transfers.\n\nBus organization: Address bus (specifies memory/device location), Data bus (carries data), Control bus (carries signals like read/write). Bus arbitration resolves conflicts when multiple devices want the bus. Interconnection structures: single bus, multiple bus, crossbar switch. I/O processors (channels) handle I/O independently, freeing the main CPU for computation.",
      },
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Study SDLC models, requirements engineering, testing, and agile methodologies.",
    duration: "35 min",
    lessons: 4,
    category: "Computer Science",
    sections: [
      {
        id: "sdlc",
        title: "Software Development Life Cycle",
        content:
          "SDLC provides a structured approach to software development. The Waterfall Model follows sequential phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance. Simple to understand but inflexible — changes are costly after phases are completed.\n\nIterative models like the Spiral Model combine iterative development with risk analysis. Each spiral loop involves: planning, risk analysis, engineering, and evaluation. The V-Model pairs each development phase with a corresponding testing phase. Prototyping develops a quick model for user feedback before full implementation. RAD (Rapid Application Development) emphasizes quick development through component reuse.",
      },
      {
        id: "agile",
        title: "Agile Methodologies",
        content:
          "Agile values: Individuals over processes, Working software over documentation, Customer collaboration over contracts, Responding to change over following a plan. Agile delivers working software in short iterations (sprints) with continuous feedback.\n\nScrum framework: Product Owner manages the backlog, Scrum Master facilitates, Development Team delivers. Events: Sprint Planning, Daily Standup (15 min), Sprint Review, Sprint Retrospective. Sprints are 1-4 weeks. Kanban visualizes workflow with columns (To Do, In Progress, Done) and limits work-in-progress. Extreme Programming (XP) practices: pair programming, TDD, continuous integration, refactoring, and collective code ownership.",
      },
      {
        id: "testing",
        title: "Software Testing",
        content:
          "Testing verifies that software meets requirements and is free of defects. Unit Testing tests individual functions/methods. Integration Testing tests module interactions — Big Bang, Top-Down, Bottom-Up, or Sandwich approaches.\n\nSystem Testing validates the complete system. Acceptance Testing confirms it meets user needs (alpha — in-house, beta — external users). Black-box testing: Equivalence partitioning, Boundary value analysis, Decision tables. White-box testing: Statement coverage, Branch coverage, Path coverage, Condition coverage. Regression testing ensures changes haven't broken existing functionality. Test-Driven Development (TDD): write test → write code → refactor.",
      },
      {
        id: "design-patterns",
        title: "Design Patterns & UML",
        content:
          "Design patterns are reusable solutions to common problems. Creational: Singleton (one instance), Factory (create without specifying class), Builder (construct complex objects), Prototype (clone objects). Structural: Adapter (interface compatibility), Decorator (add behavior), Facade (simplify interface), Proxy (access control).\n\nBehavioral: Observer (pub-sub notifications), Strategy (interchangeable algorithms), Command (encapsulate requests), Iterator (sequential access), State (behavior changes with state). UML diagrams model software visually: Class diagrams (structure), Sequence diagrams (interactions over time), Use Case diagrams (user-system interactions), Activity diagrams (workflows), and State Machine diagrams (object states and transitions).",
      },
    ],
  },
];
