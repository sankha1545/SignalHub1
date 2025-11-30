export function canSendPrivate(fromRole: string, toRole: string) {
// manager -> employee allowed, employee -> manager allowed, employee -> employee NOT allowed
if (fromRole === "manager" && toRole === "employee") return true;
if (fromRole === "employee" && toRole === "manager") return true;
if (fromRole === "admin") return true;
return false;
}